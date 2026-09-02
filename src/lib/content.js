import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

function readMdxFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(dir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return { metadata: data, content };
    });
}

export function getPosts(locale) {
  const dir = path.join(CONTENT_DIR, "blog", locale);
  return readMdxFiles(dir)
    .filter((post) => post.metadata.published)
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    .map((post) => post.metadata);
}

export function getPost(slug, locale) {
  const dir = path.join(CONTENT_DIR, "blog", locale);
  const entries = readMdxFiles(dir);
  const match = entries.find(
    (entry) => entry.metadata.slug === slug && entry.metadata.published
  );
  if (!match) return null;
  return { metadata: match.metadata, content: match.content };
}

export function getTournaments(locale) {
  const dir = path.join(CONTENT_DIR, "tournaments", locale);
  return readMdxFiles(dir)
    .filter((t) => t.metadata.published)
    .sort(
      (a, b) =>
        new Date(b.metadata.dateStart) - new Date(a.metadata.dateStart)
    )
    .map((t) => t.metadata);
}

export function getTournament(slug, locale) {
  const dir = path.join(CONTENT_DIR, "tournaments", locale);
  const entries = readMdxFiles(dir);
  const match = entries.find(
    (entry) => entry.metadata.slug === slug && entry.metadata.published
  );
  if (!match) return null;
  return { metadata: match.metadata, content: match.content };
}
