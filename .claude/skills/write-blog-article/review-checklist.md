# Review checklist

The reviewer's job is to make each article read as though one knowledgeable coach wrote it for one young athlete and their family. **Cut before you polish.** A reviewed article should come back 10–20% shorter than it went in. If it came back longer, the review did not happen.

Review **both** the pt and the en version, and check they still say the same thing.

## 1. Structural cuts

Delete outright:

- The roadmap paragraph — *"Neste artigo vais perceber..."*, *"Vamos explorar..."* / *"In this article we'll explore..."*. Start with the actual first idea. (The house `## Introdução` / `## Introduction` section is fine; a meta roadmap inside it is not.)
- A conclusion that only repeats the article back in different words. The `## Conclusão` should add a closing thought, not echo.
- Any paragraph that restates the previous one.
- Section headings that exist only for symmetry, with two thin sentences under them.
- Hedging stacks: *"pode, em certos casos, dependendo da situação, eventualmente..."*. Say the thing, then state the real exception once.

Keep one idea per section, two to four short paragraphs. Every `##` must carry a section a reader would actually stop for.

## 2. Sentence-level AI tells

Banned openers and connectives (both languages):

- *No mundo de hoje*, *Nos dias de hoje*, *Atualmente, cada vez mais...* / *In today's world*, *Nowadays, more and more...*
- *É importante notar que*, *Vale a pena referir que* / *It's important to note that*, *It's worth mentioning that*
- *Em suma*, *Em conclusão* as filler / *In summary*, *In conclusion* as filler (a genuine `## Conclusão`/`## Conclusion` section is fine; the padding phrase inside it is not).
- Rhetorical question openers: *Já alguma vez te perguntaste...?* / *Have you ever wondered...?*

Banned vocabulary — inflated or cliché:

- *jornada*, *mergulhar*, *desvendar*, *desmistificar*, *elevar ao próximo nível* / *journey*, *dive in*, *unlock*, *take it to the next level*
- *crucial*, *robusto*, *holístico*, *transformador* as filler intensifiers / *crucial*, *robust*, *holistic*, *game-changing* as filler
- *seja qual for a tua situação*, *cada atleta é único* used as padding (a genuine handoff to a coach or professional is fine — see `engagement-craft.md`).

Rhythm:

- **Tricolon padding.** *"com foco, disciplina e determinação"* — if the third item adds nothing, cut to two or one.
- **Affirmative framing.** Lead with what to do, not *"não é X, é Y"* for messaging. Keep only factual negations that correct a real misconception.
- **No em dashes (`—`) in the prose,** in either language. Use a comma, colon, parentheses or full stop. This also matters because a raw character in MDX should never be a stray `<` or `{` (see `mdx-format.md`).
- **Uniform sentence length** is the loudest tell. Every section needs at least one short sentence, under eight words.
- Prefer the concrete: *"corre cinco minutos e alonga"* over *"executa os procedimentos de preparação adequados"*.

## 3. Language correctness

### pt version — European Portuguese

The single most damaging error, since a Brazilian form instantly reads as machine-written to a Portuguese reader.

| Wrong (pt-BR / generic) | Correct (pt-PT) |
| --- | --- |
| você | tu |
| está fazendo, está treinando | está a fazer, está a treinar |
| planejamento | planeamento |
| registro | registo |
| fato | facto |
| aspecto | aspeto |
| carboidratos | hidratos de carbono |
| basquete | basquetebol |
| time | equipa |
| treino de força (ok) / academia | ginásio |
| esporte | desporto |
| café da manhã | pequeno-almoço |
| suco | sumo |
| geladeira | frigorífico |

Also check: `tu` conjugation stays consistent (no drift into `você`), and verbs agree (*tu podes*, *tu treinas*, not *tu pode*).

### en version

- British spelling, matching the existing posts: *optimise, personalised, colour, favour, practise* (verb).
- Natural English, not a literal calque of the Portuguese. Idioms and sentence order should feel native.
- Direct second person "you".

### Parity

- Same sections, same facts, same figures, same links, same length band in both files.
- The two `slug` values are different and language-appropriate; the two `date` values are consistent with the batch plan.

## 4. Voice

- Addresses the reader directly (`tu` / "you") from the first line.
- Warm, encouraging, practical. A coach and a club that cares, never a corporate brand or a textbook.
- Formative frame present: at least once, the topic connects to growing up well, habits for life, teamwork or wellbeing (see `brand-brief.md`).
- No empty promises, no guaranteed results, no *"vais ser o melhor"*.
- No talking down to young readers, no fear framing.

## 5. Engagement balance

Judge against [engagement-craft.md](engagement-craft.md). Two failure modes; miss both.

**Too cold** — the reader learns something and feels nothing about the club. Check for:

- 2–3 of the mechanisms, spread through the piece.
- The formative frame at least once.
- One belonging note near the end.
- Enough specificity that competence is obvious without being claimed.

**Too salesy** — the reader can point at the pitch. Cut on sight:

- Any recruitment CTA in the body: *junta-te já*, *inscreve-te*, *faz-te sócio hoje*, *inscreve o teu filho*. The blog has no template CTA, so a pitch here is naked and jarring.
- Self-praise: *somos o melhor clube*, *especialistas de referência*.
- *Estamos à tua espera* or any banner-ready closing.
- More than one club-page link, or the same page linked twice.
- Self-reference in the first two thirds of the article.
- Any invented player story, result or testimonial.

The test: if the reader simply ends up thinking *"este clube sabe do que fala e quer o melhor para os atletas"*, it worked.

## 6. Accuracy — youth-sport health carries consequences

- **No invented science.** Physiological, nutritional and medical claims must be traceable to a credible source. If flagged UNVERIFIED in research, describe the principle in general terms without a fake citation, or drop it.
- **No invented numbers.** No statistics, percentages, exact macro grams, hydration millilitres or *"de acordo com estudos"* without a real source. Keep advice qualitative and safe for a wide age range (5–19), and defer specifics to a coach or professional.
- **No invented club facts.** Only the true ones: founded 2005; Funchal, Madeira, Escola Secundária Francisco Franco; ~300 athletes aged 5–19; basketball, futsal, orienteering; senior women's basketball in the I Liga Feminina; slogan *"O desporto a formar para a vida"*. No invented trophies, results, player names or quotes.
- **Age-appropriate.** Advice must be safe for children and teenagers, not adapted from adult elite-sport regimens. When in doubt, hand off to a coach, doctor or sports nutritionist.

## 7. Fields and format

- Exactly the six frontmatter fields: `title`, `description`, `slug`, `date`, `image`, `published`. No extra fields.
- `title` reads well as a hero H1, ~60 characters.
- `description` is ~150–160 characters and is not a restatement of the title.
- `slug` is unique in its locale directory, accent-free, hyphenated, matches the filename.
- `date` is ISO `YYYY-MM-DD`; batch dates are staggered.
- `published` is `false` in drafts, `true` only after GATE 2.
- Body starts at `##`, uses only the supported Markdown subset (no blockquotes, tables, code, JSX, or raw `<`/`{`).
- `image` follows [image-guide.md](image-guide.md) and its URL returns HTTP 200.

## 8. Final read

Read each article aloud as if speaking to one young athlete and their parent. Anywhere the voice becomes a brochure, a textbook or a chatbot, rewrite that sentence.
