/**
 * Localize postimg.cc images to optimized local WebP assets.
 *
 * Pipeline:
 *   1. Build a map of every unique i.postimg.cc URL -> { dir, base } using the
 *      semantic structure of the data files, the messages JSON and an explicit
 *      lookup table for the hard-coded component/metadata URLs.
 *   2. Download each unique URL once, re-encode to WebP with sharp (right-sized
 *      per category, alpha preserved), and write to public/images/<dir>/.
 *   3. Emit scripts/image-manifest.json (url -> local path) and, for the larger
 *      card-style images, src/data/imageBlur.js (local path -> blurDataURL).
 *   4. With --rewrite, replace every postimg URL in the source files with its
 *      local /images/... path.
 *
 * Usage:
 *   node scripts/localize-images.mjs            # download + optimize + manifests
 *   node scripts/localize-images.mjs --rewrite  # also rewrite source references
 *   node scripts/localize-images.mjs --force    # re-encode even if webp exists
 */

import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_IMAGES = path.join(ROOT, "public", "images");
const DATA_DIR = path.join(ROOT, "src", "data");
const MESSAGES_DIR = path.join(ROOT, "src", "messages");

const args = process.argv.slice(2);
const REWRITE = args.includes("--rewrite");
const FORCE = args.includes("--force");

const POSTIMG_RE = /https:\/\/i\.postimg\.cc\/[^\s"'`)>]+/g;
const CONCURRENCY = 3;

/* ------------------------------------------------------------------ utils */

function stripDiacritics(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function slug(str) {
  return stripDiacritics(String(str))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function idOf(url) {
  const m = url.match(/i\.postimg\.cc\/([^/]+)\//);
  return m ? m[1].toLowerCase() : "x";
}

function basenameSlug(url) {
  const last = url.split("/").pop().replace(/\.[a-z0-9]+$/i, "");
  return slug(last) || idOf(url);
}

function isPostimg(value) {
  return typeof value === "string" && value.startsWith("https://i.postimg.cc/");
}

/* -------------------------------------------------------------- mapping */

// url -> "dir/base" (no extension). First writer wins (dedupe by url).
const urlToPath = new Map();
// "dir/base" -> url, to detect collisions between DIFFERENT urls.
const usedPaths = new Map();

function assign(url, dir, base) {
  if (!isPostimg(url)) return;
  if (urlToPath.has(url)) return; // already mapped (dedupe)
  base = base && base.length ? base : basenameSlug(url);
  let rel = `${dir}/${base}`;
  const owner = usedPaths.get(rel);
  if (owner && owner !== url) {
    rel = `${dir}/${base}-${idOf(url)}`; // disambiguate collision
  }
  usedPaths.set(rel, url);
  urlToPath.set(url, rel);
}

/* -------- structured: data modules -------- */

async function importData(name) {
  const mod = await import(pathToFileURL(path.join(DATA_DIR, name)).href);
  return mod;
}

async function mapBasketball() {
  const { basketTeamsImages, basketTechnicalTeam, basketSponsors, basketballProducts } =
    await importData("basketball.js");

  for (const [group, arr] of Object.entries(basketTeamsImages)) {
    for (const { image, name } of arr) {
      assign(image, `basketball/teams/${slug(group.replace(/_/g, "-"))}`, slug(name));
    }
  }
  for (const { role, members } of basketTechnicalTeam) {
    for (const { image, name } of members) {
      assign(image, `basketball/technical-team/${slug(role)}`, slug(name));
    }
  }
  for (const [tier, arr] of Object.entries(basketSponsors)) {
    for (const url of arr) assign(url, `basketball/sponsors/${slug(tier)}`, basenameSlug(url));
  }
  for (const { images, name, category } of basketballProducts) {
    images.forEach((url, i) =>
      assign(url, `basketball/products/${slug(category)}`, `${slug(name)}-${i + 1}`)
    );
  }
}

async function mapFutsal() {
  const {
    futsalTeam,
    futsalTechnicalTeam,
    futsalSponsors,
    futsalFeedback,
    futsalProducts
  } = await importData("futsal.js");

  for (const [group, val] of Object.entries(futsalTeam)) {
    if (Array.isArray(val)) {
      for (const { image, name } of val) {
        assign(image, `futsal/teams/${slug(group)}`, slug(name));
      }
    } else if (val && val.image) {
      assign(val.image, `futsal/teams/${slug(group)}`, slug(group));
    }
  }
  for (const { role, members } of futsalTechnicalTeam) {
    for (const { image, name } of members) {
      assign(image, `futsal/technical-team/${slug(role)}`, slug(name));
    }
  }
  for (const [tier, arr] of Object.entries(futsalSponsors)) {
    for (const url of arr) assign(url, `futsal/sponsors/${slug(tier)}`, basenameSlug(url));
  }
  for (const { image, author } of futsalFeedback) {
    assign(image, "futsal/feedback", slug(author));
  }
  futsalProducts.forEach(({ image, name, category }, i) =>
    assign(image, `futsal/products/${slug(category)}`, `${slug(name)}-${i + 1}`)
  );
}

async function mapCompany() {
  const { departments } = await importData("company.js");
  for (const { department, members } of departments) {
    for (const { imageSrc, name } of members) {
      assign(imageSrc, `company/${slug(department)}`, slug(name));
    }
  }
}

/* -------- structured: messages JSON -------- */

async function mapMessages() {
  for (const file of ["en.json", "pt.json"]) {
    const json = JSON.parse(await readFile(path.join(MESSAGES_DIR, file), "utf8"));
    walkMessages(json);
  }
}

function walkMessages(node, ctx = {}) {
  if (Array.isArray(node)) {
    node.forEach((item) => walkMessages(item, ctx));
    return;
  }
  if (!node || typeof node !== "object") return;

  // achievements: { achievementsList: { basketball: [...], futsal: [...] } }
  if (node.achievementsList && typeof node.achievementsList === "object") {
    for (const [sport, list] of Object.entries(node.achievementsList)) {
      if (Array.isArray(list)) {
        for (const item of list) {
          if (isPostimg(item?.image)) {
            assign(item.image, `achievements/${slug(sport)}`, basenameSlug(item.image));
          }
        }
      }
    }
  }

  // membership promotions: [{ title, companies: [{ businessName, image }] }]
  if (Array.isArray(node.promotions)) {
    for (const promo of node.promotions) {
      const cat = slug(promo?.title || "partners");
      for (const company of promo?.companies || []) {
        if (isPostimg(company?.image)) {
          assign(company.image, `store/${cat}`, slug(company.businessName));
        }
      }
    }
  }

  for (const value of Object.values(node)) walkMessages(value, ctx);
}

/* -------- hard-coded component / metadata URLs -------- */

const COMPONENT_MAP = {
  "https://i.postimg.cc/Fs4jGHxq/meta-pt.png": ["meta", "meta-pt"],
  "https://i.postimg.cc/yxbC1bn3/meta-en.png": ["meta", "meta-en"],
  "https://i.postimg.cc/59QCLf9Q/Perguntas-Frequentes.jpg": ["headers", "perguntas-frequentes"],
  "https://i.postimg.cc/tCX9yzcR/Queres-inscrever-o-teu-clube-num-dos-maiores-Torneios-banner-background-pa-gina-inicial.jpg": [
    "homepage",
    "banner-torneios-cta"
  ],
  "https://i.postimg.cc/PJ3NPLJ9/welcome.png": ["homepage", "welcome"],
  "https://i.postimg.cc/bNm1tJ4z/banner-torneio.jpg": ["homepage", "banner-torneio"],
  "https://i.postimg.cc/Ghhn6mBH/Temos-as-modalidades-certas-para-ti.png": ["homepage", "modalidades-cta"],
  "https://i.postimg.cc/0Nfj1KPp/ATL.jpg": ["activities", "atl"],
  "https://i.postimg.cc/4nks9XXf/Organizac-a-o-de-Aniversa-rios.jpg": ["activities", "aniversarios"],
  "https://i.postimg.cc/024pWKh7/Orientac-a-o.jpg": ["activities", "orientacao"],
  "https://i.postimg.cc/zDPj1VfZ/Muay-Thai.jpg": ["activities", "muay-thai"],
  "https://i.postimg.cc/1tVpmKtk/Zumba.jpg": ["activities", "zumba"],
  "https://i.postimg.cc/Y01YgqQ8/Gina-stica.jpg": ["activities", "ginastica"],
  "https://i.postimg.cc/rsMdZY3B/atl-verao.jpg": ["registrations", "atl-verao"],
  "https://i.postimg.cc/KzBPZ6xQ/PT.jpg": ["registrations", "pt"],
  "https://i.postimg.cc/5yzHLZYj/Cartaz-Torneio-Basket.webp": ["registrations", "cartaz-torneio-basket"],
  "https://i.postimg.cc/65gGMZpq/modalidades-basquetebol.jpg": ["basketball", "modalidades-basquetebol"],
  "https://i.postimg.cc/D0k7sr2g/Hora-rios-de-Treino-Formac-a-o-Basquetebol.png": ["basketball", "horarios-treino"],
  "https://i.postimg.cc/GmNJkty2/Hora-rios-de-Treino-Futsal.png": ["futsal", "horarios-treino"],
  "https://i.postimg.cc/15mpX6CC/mission.jpg": ["about", "mission"],
  "https://i.postimg.cc/wThR4Fm6/Quer-apoiar-o-nosso-Clube-Torne-se-um-patrocinador.png": ["about", "sponsor-cta"]
};

function mapComponents() {
  for (const [url, [dir, base]] of Object.entries(COMPONENT_MAP)) assign(url, dir, base);
}

// Dead postimg URLs (HTTP 404 on postimg) remapped to an existing localized
// image of the same subject. Applied verbatim so collision logic is bypassed.
const OVERRIDES = {
  "https://i.postimg.cc/25Dzs6kB/Tiago-Rosa2.png": "futsal/technical-team/seniores/tiago-rosa"
};

function applyOverrides() {
  for (const [url, rel] of Object.entries(OVERRIDES)) urlToPath.set(url, rel);
}

/* -------- final sweep for anything unmapped -------- */

const SOURCE_FILES = [
  "src/data/basketball.js",
  "src/data/futsal.js",
  "src/data/company.js",
  "src/messages/en.json",
  "src/messages/pt.json",
  "src/lib/metadata.js",
  "src/components/AppHead.jsx",
  "src/components/Hero/ContactHero.jsx",
  "src/app/[locale]/HomePage.jsx",
  "src/app/[locale]/activities/ActivitiesPage.jsx",
  "src/app/[locale]/registrations/RegistrationsPage.jsx",
  "src/app/[locale]/basketball/BasketballPage.jsx",
  "src/app/[locale]/futsal/FutsalPage.jsx",
  "src/app/[locale]/about/AboutPage.jsx",
  "src/app/[locale]/about/sponsors/SponsorsPage.jsx"
];

async function sweepUnmapped() {
  for (const rel of SOURCE_FILES) {
    const txt = await readFile(path.join(ROOT, rel), "utf8");
    const matches = txt.match(POSTIMG_RE) || [];
    for (const url of matches) {
      if (!urlToPath.has(url)) assign(url, "misc", basenameSlug(url));
    }
  }
}

/* ------------------------------------------------------- optimization */

function maxWidthFor(dir) {
  if (/^(homepage|headers|about|activities|registrations|meta)(\/|$)/.test(dir)) return 1200;
  if (dir === "basketball" || dir === "futsal") return 1200; // top-level banners
  if (/\bsponsors\b/.test(dir)) return 360;
  if (/\bfeedback\b/.test(dir)) return 160;
  if (/\bachievements\b/.test(dir) || dir.startsWith("achievements")) return 600;
  if (dir.startsWith("store")) return 400;
  if (/\bproducts\b/.test(dir)) return 640;
  return 640; // teams, technical-team, company, misc
}

function wantsBlur(dir) {
  return (
    dir.startsWith("basketball/teams") ||
    dir.startsWith("basketball/technical-team") ||
    dir.startsWith("futsal/teams") ||
    dir.startsWith("futsal/technical-team") ||
    dir.startsWith("futsal/feedback") ||
    dir.startsWith("company/")
  );
}

async function fetchBuffer(url, { timeout = 45000, retries = 4 } = {}) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeout);
    try {
      const res = await fetch(url, {
        signal: ctrl.signal,
        headers: { "User-Agent": "Mozilla/5.0 (localize-images script)" }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, 500 * attempt));
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastErr;
}

async function processOne(url, rel) {
  const dir = rel.slice(0, rel.lastIndexOf("/"));
  const outAbs = path.join(PUBLIC_IMAGES, `${rel}.webp`);
  const localPath = `/images/${rel}.webp`;
  const maxW = maxWidthFor(dir);

  let sourceBuf;
  if (!FORCE && existsSync(outAbs)) {
    sourceBuf = await readFile(outAbs); // reuse existing webp for blur
  } else {
    const input = await fetchBuffer(url);
    sourceBuf = await sharp(input)
      .resize({ width: maxW, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();
    await mkdir(path.dirname(outAbs), { recursive: true });
    await writeFile(outAbs, sourceBuf);
  }

  let blurDataURL;
  if (wantsBlur(dir)) {
    const blurBuf = await sharp(sourceBuf)
      .resize({ width: 16 })
      .webp({ quality: 40 })
      .toBuffer();
    blurDataURL = `data:image/webp;base64,${blurBuf.toString("base64")}`;
  }

  return { url, local: localPath, dir, blurDataURL };
}

async function pool(items, worker, size) {
  const results = [];
  const failures = [];
  let i = 0;
  async function run() {
    while (i < items.length) {
      const idx = i++;
      const [url, rel] = items[idx];
      try {
        results.push(await worker(url, rel));
        const done = results.length + failures.length;
        if (done % 20 === 0 || done === items.length) {
          console.log(`  processed ${done}/${items.length}`);
        }
      } catch (err) {
        failures.push({ url, rel, error: err.message });
        console.warn(`  FAILED ${url} (${err.message})`);
      }
    }
  }
  await Promise.all(Array.from({ length: size }, run));
  process.stdout.write("\n");
  return { results, failures };
}

/* ---------------------------------------------------------- rewrite */

async function rewriteSources() {
  for (const rel of SOURCE_FILES) {
    const abs = path.join(ROOT, rel);
    let txt = await readFile(abs, "utf8");
    let changed = false;
    for (const [url, localRel] of urlToPath) {
      if (txt.includes(url)) {
        txt = txt.split(url).join(`/images/${localRel}.webp`);
        changed = true;
      }
    }
    if (changed) {
      await writeFile(abs, txt);
      console.log(`  rewrote ${rel}`);
    }
  }
}

/* -------------------------------------------------------------- main */

async function main() {
  console.log("Building URL map...");
  await mapBasketball();
  await mapFutsal();
  await mapCompany();
  await mapMessages();
  mapComponents();
  await sweepUnmapped();
  applyOverrides();
  console.log(`  ${urlToPath.size} unique postimg URLs mapped.`);

  console.log("Downloading + optimizing to WebP...");
  const { results, failures } = await pool([...urlToPath.entries()], processOne, CONCURRENCY);

  // manifest (sorted for stable diffs)
  const manifest = {};
  const blurMap = {};
  for (const r of results.sort((a, b) => a.url.localeCompare(b.url))) {
    manifest[r.url] = r.local;
    if (r.blurDataURL) blurMap[r.local] = r.blurDataURL;
  }
  await writeFile(
    path.join(__dirname, "image-manifest.json"),
    JSON.stringify(manifest, null, 2) + "\n"
  );

  const blurEntries = Object.keys(blurMap)
    .sort()
    .map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(blurMap[k])}`)
    .join(",\n");
  const blurFile =
    "// AUTO-GENERATED by scripts/localize-images.mjs. Do not edit by hand.\n" +
    "// Maps local image paths to tiny WebP blur placeholders for next/image.\n" +
    `export const imageBlur = {\n${blurEntries}\n};\n`;
  await writeFile(path.join(DATA_DIR, "imageBlur.js"), blurFile);

  console.log(`  wrote ${results.length} images, ${Object.keys(blurMap).length} blur placeholders.`);
  if (failures.length) {
    console.warn(`\n  ${failures.length} FAILED downloads:`);
    for (const f of failures) console.warn(`    - ${f.url} -> ${f.rel} (${f.error})`);
  }

  if (REWRITE) {
    console.log("Rewriting source references...");
    await rewriteSources();
  } else {
    console.log("Skipped source rewrite (pass --rewrite to apply).");
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
