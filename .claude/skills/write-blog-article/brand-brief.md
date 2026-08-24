# Brand brief — CDEFF

`DESIGN.md` at the repo root is canonical for visual identity. This file holds the club context and the working rules for articles, distilled from the site copy in `src/messages/pt.json` and `src/data/`.

## Who the club is

**Clube Desportivo da Escola Francisco Franco (CDEFF)** — a youth sports club founded on **24 October 2005**, based at the Escola Secundária Francisco Franco in **Funchal, Madeira**. Sports: **basketball, futsal and orienteering** (orientação/ORIFF). It also runs ATL holiday programmes, birthday events and activities like muay thai, zumba and ginástica.

Roughly **300 athletes aged 5 to 19** across all youth age groups (escalões), including a **senior women's basketball team in the I Liga Feminina**.

**Slogan:** *"O desporto a formar para a vida"* — sport forming for life.

**Team lema (futsal):** *"UNIDOS VENCEREMOS"*.

## Mission, vision and values (verbatim from the site)

**Mission:** *"A nossa missão consiste em promover o interesse das crianças e jovens com idades compreendidas entre os 5 e os 19 anos para o desenvolvimento da prática desportiva, assente em princípios de ética, do espírito competitivo e social e da formação integral dos atletas, mantendo elevados padrões de exigência e qualidade, onde se concilia o desenvolvimento humano e desportivo nos jovens."*

**The framing is consistently formative over competitive.** From the About copy: *"não tendo apenas em consideração a vertente competitiva, mas sobretudo a vertente formativa."*

**Stated values:** team spirit and mutual aid (espírito de equipa e de entreajuda), formation for life, academic success alongside sport, ethics, responsibility, friendship, respect, punctuality, discipline, commitment, dedication, fair play and a healthy lifestyle.

## The audience

Two readers, sometimes the same household:

- **The young athlete** (5–19). Wants to get better, understand their sport, and feel part of a team. Talk to them directly, respect their intelligence, keep it concrete.
- **The parent / guardian.** Wants to know their child is safe, learning, well fed, well rested and growing as a person. Reassure through substance, not slogans.

Every article should clearly serve one of them (or both). A nutrition article can address the athlete directly while giving a parent something they can act on at home.

## Working rules for articles

**Two languages, every time.** Each article ships as a `pt` file and an `en` file with different, language-specific slugs. The en version is a natural rendering, not a word-for-word translation.

**Language — pt version.** European Portuguese (`pt-PT`). Address the reader as `tu`, never `você`, never the impersonal third person. The site is consistent on this: *"Vem conhecer-nos"*, *"Faz do desporto a tua escola"*, *"na tua rotina de treino"*.

**Language — en version.** Clear, natural English (the existing en posts use British spelling: *optimise, personalised, colour*). Direct second person "you". Match the register of the pt version.

**Voice.** Warm, encouraging, practical, community-first. A knowledgeable coach or a trusted club, never a corporate brand and never a textbook. Positive and formative. It speaks to a family, not to a market.

**Affirmative framing.** Communicate ideas in the positive. Lead with what to do, not with *"não é X, é Y"*. Keep only factual negations that correct a real misconception (*"os hidratos de carbono não são o inimigo"* is fine when it corrects something; a rhetorical contrast is not).

**No em dashes (`—`) in the prose.** European Portuguese does not break a sentence with the em dash the way English does; it reads as machine-translated. Use a comma, a colon, parentheses or a full stop, in both languages, in body text and headings alike.

**Formation, not just performance.** Even a performance topic (nutrition, conditioning) should connect back, at least once, to why it matters for a young person growing up: habits for life, discipline, wellbeing, belonging. That connection is the club's actual differentiator.

**Never reduce sport to winning.** The club exists to form people. Articles can talk about competing and improving, but the frame is development, health and community, not medals at any cost.

**Real facts only.** The club's real facts: founded 2005; in Funchal, Madeira, at the Escola Secundária Francisco Franco; ~300 athletes aged 5–19; basketball, futsal and orienteering; a senior women's basketball team in the I Liga Feminina; the slogan *"O desporto a formar para a vida"*. Do not invent trophies, statistics, player names, results or quotes. Real names of coordinators and coaches exist in `src/data/company.js`, `basketball.js` and `futsal.js` if genuinely needed, but articles rarely need to name individuals.

**Hard boundary.** Never fabricate statistics, studies, medical claims, results, testimonials or club history. Youth-sport health advice carries real consequences: any physiological or nutritional claim must trace to a credible source, and anything unverified is described as a general principle without a fake citation, or dropped.

**What the reader should feel at the end.** *"Este clube sabe do que fala e quer mesmo o melhor para os seus atletas — quero fazer parte disto."*
