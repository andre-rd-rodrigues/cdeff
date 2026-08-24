---
name: write-blog-article
description: Researches, selects, writes and reviews a batch of 3 bilingual (pt-PT + en) blog articles for the CDEFF (Clube Desportivo da Escola Francisco Franco) site, targeting the sport, formation, health and community themes that serve the club's young athletes and their families. Use when the user asks to write blog articles, escrever artigos, criar conteúdo para o blog, plan editorial content, or add posts under content/blog/.
---

# Write blog articles — CDEFF Sports Club

Produces **3 articles per run**, each in a different content pillar. Each article ships as **two MDX files** — one `pt` and one `en` — because the site stores every locale independently under `content/blog/<locale>/`. Nothing is published (`published: true`) until the user approves.

## Read first

- [brand-brief.md](brand-brief.md) — who CDEFF is, the mission, the audience and the voice rules. Non-negotiable.
- [engagement-craft.md](engagement-craft.md) — how the article builds trust in the club's formative approach and invites belonging, without turning into an advert.
- [mdx-format.md](mdx-format.md) — the exact frontmatter, the Markdown subset the renderer supports, and the file layout.
- [image-guide.md](image-guide.md) — cover-image art direction and how to verify an image URL.
- [review-checklist.md](review-checklist.md) — the de-slop, pt-PT/en, engagement and accuracy gates.

Discoverability specialists, used in Phase 5:

- [seo-specialist.md](seo-specialist.md) — search rankings and the organic click.
- [aeo-specialist.md](aeo-specialist.md) — featured snippets, voice answers, extractable structure.
- [geo-specialist.md](geo-specialist.md) — citation inside AI-generated answers.

## How this project actually works (read before doing anything)

- The blog is **local MDX**, not Notion. `AGENTS.md` and `README.md` are stale on this. The data layer is `src/lib/content.js` (`getPosts`, `getPost`), which reads `content/blog/<locale>/*.mdx` with `gray-matter`.
- A post is picked up **automatically** at build time (`generateStaticParams` in `src/app/[locale]/blog/[slug]/page.jsx` scans the filesystem). There is no registry, index or array to edit.
- `published: true` is **mandatory** — anything else is silently dropped from both the listing and the detail route (it 404s). This is the natural draft gate: write with `published: false`, flip to `true` only after GATE 2.
- The route is resolved by the **`slug` frontmatter field**, not the filename. Keep them identical anyway. pt and en use **different, language-specific slugs**.
- Posts are sorted by `date` descending, and **every published post appears on the homepage** (`src/app/[locale]/HomePage.jsx` maps them all, no slice). Keep dates accurate.
- Locales are fully decoupled: there is no shared ID linking a pt post to its en twin, and the language switcher is disabled on blog detail pages. Still ship both, to keep the 1:1 parity the existing six files have.

## Progress checklist

Copy this and keep it updated:

```
- [ ] Phase 1: research brief (sport + formation + youth-sport health)
- [ ] Phase 2: 3 topics selected, in 3 different pillars, screened against existing posts
- [ ] GATE 1: user approved the topics
- [ ] Phase 3: 3 articles drafted, each in pt AND en
- [ ] Phase 4: humanizing review (both languages)
- [ ] Phase 5: SEO + AEO + GEO specialists per article
- [ ] Phase 6: proposals reconciled, files written to content/blog/{pt,en}/ with published: false
- [ ] GATE 2: user approved the drafts
- [ ] Integration: flip published: true, image URLs verified 200, dates staggered
- [ ] Verification: pnpm lint && pnpm test && pnpm build all pass
```

## The content pillars

Every topic must map to exactly one, and the three topics in a batch must sit in three different pillars. There is no `category` field in the frontmatter, so the pillar is an editorial-planning device, not a stored value.

| Pillar | What it covers |
| --- | --- |
| `basquetebol` | Basketball-specific technique, tactics, game understanding, position play. |
| `futsal` | Futsal-specific technique, tactics, the fast game, team play. |
| `nutricao-desempenho` | Sports nutrition, hydration, fuelling for training and matchdays. |
| `treino-condicao` | Training, conditioning, injury prevention, warm-up, technique drills. |
| `descanso-recuperacao` | Rest, sleep, recovery, managing load across a season. |
| `mente-bem-estar` | Focus, motivation, dealing with pressure, wellbeing for young athletes. |
| `formacao-valores` | The club's reason for being: sport as formation for life, teamwork, discipline, fair play, school + sport balance. Written for athletes and parents. |
| `vida-do-clube` | Club and community life: what a season looks like, age groups (escalões), how a family joins, ATL, orientação, the Funchal Futsal Cup spirit. |

## Phase 1 — Research

Launch one `explore` subagent. Prompt it with:

> Research blog topics for CDEFF, a Portuguese youth sports club in Funchal, Madeira, whose sports are basketball, futsal and orienteering and whose mission is athlete formation for life, not only competition. The audience is young athletes (ages 5–19) and their families.
>
> Use WebSearch. Run queries in both European Portuguese (pt-PT) and English, because every article ships in both languages.
>
> Map candidate topics to these pillars: basquetebol; futsal; nutrição e desempenho; treino e condição física; descanso e recuperação; mente e bem-estar; formação e valores; vida do clube e comunidade.
>
> Favour evergreen, genuinely useful, athlete-education topics that a coach or a well-informed parent would respect — sports science made practical, technique explained simply, how to support a young athlete. Avoid anything that reads as generic filler.
>
> For each candidate report: the real question or need behind it, why it fits CDEFF's formative mission, which pillar it belongs to, whether it leans basketball, futsal or general, and the source. Note the pt-PT and en search phrasing people actually use.
>
> Rules: any physiological, medical or nutritional claim must be traceable to a credible source (health authorities, sports-science bodies, reputable medical references such as MSD Manuals). Flag anything you cannot verify as UNVERIFIED rather than repeating it. Do not invent statistics, studies or club facts.
>
> Return a research brief of 10–15 candidate topics with evidence and search-intent notes.

## Phase 2 — Select

Rank the candidates yourself (no subagent needed) on:

1. **Brand fit** against `brand-brief.md` — serves the club's formative mission and speaks to a young athlete or a parent, in the warm, encouraging club voice.
2. **Real demand** — a genuine question people search or ask a coach, phrased the way they phrase it.
3. **Usefulness** — the reader leaves able to do something differently. A topic with nothing practical to give cannot be rescued by optimisation in Phase 5, so screen it out here.
4. **Non-overlap** — screen against the existing posts so the article does not repeat them.

Existing pt slugs to avoid duplicating: `qual-a-nutricao-ideal-para-um-jogador-de-basquetebol`, `descanso-e-futsal-beneficios-para-otimizar-o-rendimento`, `5-conselhos-para-treinar-ao-ar-livre-no-inverno`.
Existing en slugs: `what-is-the-ideal-nutrition-for-a-basketball-player`, `rest-and-futsal-benefits-to-optimise-performance`, `5-tips-for-training-outdoors-in-winter`.

Pick **3 topics in 3 different pillars**. Present each with the proposed pt and en title, pillar, sport lean, target question and a one-line rationale.

**GATE 1 — stop and ask the user to confirm or swap before writing anything.**

## Phase 3 — Write

Launch **3 `generalPurpose` subagents in parallel**, one per approved topic. Give each the full topic brief plus instructions to read `brand-brief.md`, `engagement-craft.md`, `mdx-format.md` and `image-guide.md` from this skill directory.

Each subagent returns **one article in both languages**:

- **pt-PT version**: European Portuguese, informal `tu`, 400–900 words (match the existing posts' length unless the user asked otherwise).
- **en version**: a faithful, natural English rendering of the same article — not a literal translation. Same structure, same facts, same length band, direct "you".
- Body is **plain Markdown** starting at `##` (the `title` is already rendered as the H1 by the page header). Structure: `## Introdução`/`## Introduction` → 3–6 topical `##` sections → `## Conclusão`/`## Conclusion`, matching the house pattern.
- Only the supported Markdown subset: `##`/`###`, paragraphs, `-`/`1.` lists, `**bold**`, `*italic*`, `[links](https://...)`, images. **No blockquotes, tables, code fences, callouts, or any JSX** — the renderer does not style them and raw `{` or `<` breaks the MDX build. See `mdx-format.md`.
- Real, useful information first. Genuine engagement mechanisms from `engagement-craft.md` woven in, never a pitch.
- Optional one or two inline links to credible external references for technical terms (as existing posts do), and at most one natural link to a relevant club page where it truly helps.
- All six frontmatter fields populated per `mdx-format.md`, and a proposed cover image per `image-guide.md`.

## Phase 4 — Review

Launch one `generalPurpose` subagent to review all three articles in both languages, applying [review-checklist.md](review-checklist.md). It must actually cut — a reviewed article should come back shorter than it went in. It verifies voice, European Portuguese lexicon (the single most damaging error), en/pt parity, the engagement balance, accuracy guardrails, the Markdown subset and field constraints, and the cover-image fit.

## Phase 5 — Discoverability specialists

For **each** article, launch three subagents **in parallel**: one reading [seo-specialist.md](seo-specialist.md), one [aeo-specialist.md](aeo-specialist.md), one [geo-specialist.md](geo-specialist.md). Each also reads `brand-brief.md` and `review-checklist.md`. They audit the **pt version as source of truth** and flag any en parity issue.

They **audit and propose**. They never rewrite the article and they never edit files. Each returns a capped, numbered list of bounded proposals with exact before/after text, in the format its file specifies.

Nine subagents for a batch of three. Launch them in one message.

Reality check the specialists must respect: this project currently has **no `generateMetadata`, no JSON-LD and no per-post OG images**. So on-page discoverability lives entirely in the `title`, `description`, `slug`, the heading phrasing and the extractable structure of the body. Do not propose schema, meta tags or OG work — that is repo-level engineering, out of scope for an article.

## Phase 6 — Reconcile

You apply the proposals. This phase exists because a discoverability pass is exactly what reintroduces the slop Phase 4 removed — stuffed keywords, headings turned into a quiz, a bolted-on summary.

**Precedence when proposals collide:**

1. `brand-brief.md` and `review-checklist.md` — a proposal that breaks voice, pt-PT/en, accuracy or the engagement balance is **rejected outright**, whichever specialist made it.
2. AEO structure — the answer paragraph and extractable steps earn their place first.
3. SEO phrasing.
4. GEO phrasing.

**Budget:** the reconciled article may not exceed the Phase 4 word count by more than 10%. No closing summary, "principais conclusões" or TL;DR beyond the natural `## Conclusão`/`## Conclusion` the house style already uses.

Apply every accepted proposal to **both** the pt and en versions to keep them in parity. Then re-run sections 1, 2 and 3 of `review-checklist.md` against the changed passages only.

Write the results as the actual MDX files, **with `published: false`**, to `content/blog/pt/<pt-slug>.mdx` and `content/blog/en/<en-slug>.mdx`. Record every rejected proposal with a one-line reason.

**GATE 2 — present the drafts and the reconciliation summary, then stop for approval.**

## Integration

Only after GATE 2:

1. Flip `published: false` to `published: true` in all six files.
2. Confirm every `slug` is unique within its locale directory, accent-free and hyphenated, and matches its filename.
3. **Verify each cover image URL returns HTTP 200** (see `image-guide.md`); a hallucinated URL renders as a broken image and as the detail-page hero background.
4. Stagger the `date` values across the batch rather than dating all three the same day — the homepage and listing sort by `date` descending, so this controls order.
5. No message-file edits are needed; all article copy lives in the MDX.

## Verification

```bash
pnpm lint && pnpm test && pnpm build
```

There is no `typecheck` script (the project is plain JS/JSX). `pnpm build` is the real MDX validator: it compiles every file, so malformed MDX (a stray `<` or `{`) fails here, not at lint, and it confirms each new slug enters `generateStaticParams` and the sitemap.
