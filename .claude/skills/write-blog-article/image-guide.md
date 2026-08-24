# Cover image guide

## Where the image appears

The `image` field is used in three places, so it has to work in all three:

1. **The blog card** (`src/components/Blog/BlogCard.jsx`) — a fixed `h-[250px]` box, `next/image` with `fill` and `object-fit: cover`. A landscape crop survives; a portrait or corner-weighted subject gets cut.
2. **The detail-page hero** (`src/components/PageHeader/BlogPageHeader.jsx`) — the image is a **CSS `background: url(...)`** on a ~340px band, with the **white title and date rendered on top of it**. So it must have enough dark or mid-tone area for white text to stay legible.
3. It is also the effective share image, since there is no separate OG image.

## How to specify it

Use a full Unsplash URL, matching the existing posts' shape:

```
https://images.unsplash.com/photo-XXXXXXXXXXXXX?q=80&w=2670&auto=format&fit=crop
```

`next.config.js` allows any https host (`remotePatterns` hostname `**`), so technically any URL works, but stay on Unsplash for consistency and licensing.

**Verify the URL returns HTTP 200 before shipping it.** A hallucinated photo ID renders as a broken card and a broken hero:

```bash
curl -s -o /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=200"
```

Expect `200`. Note: the existing six posts all reuse the same placeholder ID (`photo-1552674605-db6ffd4facb5`). Prefer a genuinely relevant, verified image over reusing the placeholder.

## The visual direction

`DESIGN.md` describes an athletic, committed navy-and-red club identity: *"The Matchday Kit"*, *"a proud local club with real history, not generic SaaS with a sporty photo."* The cover should feel like it belongs to that club.

Choose photographs that are:

- **Real sport in motion** — young athletes training or playing basketball or futsal, a court or a pitch, a ball, a team. Concrete and tied to the article's actual topic.
- **Energetic and warm**, with natural light and real depth. Action beats a posed portrait.
- **Landscape**, one clear subject, room in the frame — it will be cropped wide and overlaid with text.
- **Legible under white text** — enough dark or mid-tone area (or a naturally darker zone) so the hero title reads.
- **Age-appropriate and community-feeling** where people appear: youth sport, teamwork, a coach and players, never stiff corporate staging.

## Never

- Traditional corporate stock: handshakes, boardrooms, suits, rigid crossed-arms portraits.
- Generic "startup" or beige-editorial imagery that fights the club's navy-and-red identity.
- Anything with baked-in text, watermarks, heavy gradients or glassmorphism.
- Images so bright or busy that white overlay text disappears.
- Imagery unrelated to the topic — a piece about futsal shows futsal, a piece about nutrition shows food or an athlete eating, not an abstract stock cliché.
- Anything that misrepresents the club (a professional adult league when the club is youth formation, a different sport than the article).

## Alt text

The `image` frontmatter field has no separate alt in the current schema (only the in-body `img` override adds `alt`). So there is no cover alt slot to fill. If you add **in-body images**, give each one real alt text in the reader's language describing what is in the frame, never a keyword slot.

Good (pt): `"Jovens atletas a treinar basquetebol num pavilhão"`
Good (en): `"Young athletes training basketball in a sports hall"`
Bad: `"basquetebol Funchal CDEFF treino formação clube"`
