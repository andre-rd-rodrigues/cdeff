# MDX format

## Where a post lives

Two files per article, one per locale, read by `src/lib/content.js`:

```
content/blog/pt/<pt-slug>.mdx
content/blog/en/<en-slug>.mdx
```

The filename should equal the `slug`. The route is resolved by the `slug` frontmatter field, and the file is discovered automatically at build time — there is no index to update.

## The frontmatter — exactly six fields

Every existing post has these six, and nothing in the UI reads anything else. Do not invent `category`, `author`, `tags`, `excerpt` or `readingTime` fields — they are dead weight and nothing renders them.

```yaml
---
title: "Qual a nutrição ideal para um jogador de basquetebol?"
description: "Uma alimentação adequada desempenha um papel fundamental na prática de basquetebol, vem conhecer os principais aspetos da nutrição ideal!"
slug: "qual-a-nutricao-ideal-para-um-jogador-de-basquetebol"
date: "2023-11-28"
image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2670&auto=format&fit=crop"
published: true
---
```

### Field rules

**`title`** — rendered as the page H1 by `BlogPageHeader`, over the cover image in white. Concrete and specific. The pt version reads naturally in European Portuguese; the en version is its natural English equivalent, not a literal translation. Existing titles are often a real question (*"Qual a nutrição ideal para um jogador de basquetebol?"*). Roughly 60 characters so it does not truncate elsewhere.

**`description`** — the excerpt shown on the blog card and the homepage. Around 150–160 characters. Give a reason to read; do not just restate the title. It is the closest thing this project has to a meta description, so make it a real sentence.

**`slug`** — lowercase, accent-free, hyphenated, descriptive. pt slugs strip accents (`nutrição` → `nutricao`, `benefícios` → `beneficios`). The pt and en slugs are **different** and language-specific. Must be unique within its locale directory and match the filename.

**`date`** — ISO `YYYY-MM-DD`. Posts sort by this descending on both the listing and the homepage. Stagger a batch across different dates rather than dating all three the same day.

**`image`** — a full https URL. `next.config.js` allows any https host, but stay on Unsplash like the existing posts. Landscape, high-contrast enough for white overlay text (it becomes the detail-page hero background as well as the card cover). See [image-guide.md](image-guide.md), and verify it returns HTTP 200.

**`published`** — `true` to go live, `false` to keep it out of the site. Write drafts with `published: false`; flip to `true` only after GATE 2. A post that is not `published: true` 404s on its detail route and never lists.

## The body — a narrow Markdown subset

The body is compiled by `next-mdx-remote/rsc` and styled only by the global `.markdown` class in `src/styles/globals.scss`. That means a **narrow subset of Markdown is safe**, and everything else is either unstyled or breaks the build.

**Supported and styled:**

| Syntax | Notes |
| --- | --- |
| `## Heading` | h2 section heading. **Bodies start at `##`** — the title is already the H1. |
| `### Subheading` | h3, styled. |
| `Paragraph text.` | body paragraph. |
| `- item` | bullet list. |
| `1. item` | numbered list. |
| `**bold**` | bold. Use sparingly; body copy is quiet by design. |
| `*italic*` | italic. |
| `[text](https://...)` | inline link, renders in club red. |
| `![alt](https://...)` | image, capped at 400px tall, `object-fit: cover`. |

**Do not use** — the renderer does not style these, and some break the MDX build:

- **No blockquotes (`>`)**, tables, code fences (```` ``` ````) or inline code — unstyled, and code fences read as literal.
- **No `h5`/`h6`** — unstyled (only h1–h4 are).
- **No JSX, no components, no shortcodes** — there is no custom MDX component registry. A `<Note>` or `<Callout>` does not exist.
- **No raw `{` or `<` in prose.** MDX parses `{` as a JS expression and `<` as JSX, so a literal `<` or `{` in the text fails the build. Write "menos de 5" rather than "< 5", and avoid stray braces.

## House structure

Follow the pattern every existing post uses:

```
## Introdução        (## Introduction)
## <topical section>
## <topical section>
## <topical section>
## Conclusão         (## Conclusion)
```

Three to six `##` sections between intro and conclusion. One idea per section, two to four short paragraphs each, with a `-` or `1.` list where the content is genuinely a set or a sequence. Length 400–900 words, matching the existing posts.

Occasional inline links to a credible external reference for a technical term are on-house (existing posts link to MSD Manuals and Wikipedia for *eletrólitos* and *glicogénio*). Keep them to one or two, and use descriptive anchor text, never "clica aqui".

## Worked example (pt)

```mdx
---
title: "Como aquecer antes de um treino de futsal"
description: "Um bom aquecimento previne lesões e melhora o rendimento. Vê como preparar o corpo antes de entrares em campo."
slug: "como-aquecer-antes-de-um-treino-de-futsal"
date: "2026-08-20"
image: "https://images.unsplash.com/photo-XXXXXXXXXXXXX?q=80&w=2670&auto=format&fit=crop"
published: false
---

## Introdução

Antes de entrares em campo, o teu corpo precisa de estar pronto. Um bom aquecimento...

## Porque é que o aquecimento importa

...

## Uma rotina simples em cinco passos

1. Corrida leve durante três a cinco minutos.
2. ...

## Conclusão

...
```

The en file mirrors it with `## Introduction` / `## Conclusion`, its own slug and title, and a slightly earlier or later `date`.
