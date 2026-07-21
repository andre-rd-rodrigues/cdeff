---
name: CDEFF Sports Club
description: Team-colours identity for Francisco Franco Sports Club — Basketball & Futsal.
colors:
  brand-navy: "#273E79"
  navy-overlay: "#21366B"
  club-red: "#BD3A4E"
  red-deep: "#A83245"
  red-bright: "#C94E60"
  coastal-cyan: "#3A9EBD"
  charcoal: "#2F333A"
  mist-grey: "#F5F5F5"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.3rem, 8vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.8rem, 5vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0.02em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 5vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.02em"
  body:
    fontFamily: "DM Sans, Helvetica, Arial, sans-serif"
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)"
    fontWeight: 300
    lineHeight: 1.9
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(0.7rem, 2vw, 0.8rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.125em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  pill: "9999px"
  square: "0px"
spacing:
  gutter: "clamp(20px, 5vw, 70px)"
  section-gap: "75px"
  card-pad: "28px"
components:
  button-primary:
    backgroundColor: "{colors.club-red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.club-red}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "12px 32px"
  button-secondary-hover:
    backgroundColor: "{colors.club-red}"
    textColor: "{colors.white}"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.brand-navy}"
    rounded: "{rounded.md}"
    padding: "{spacing.card-pad}"
  icon-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.brand-navy}"
    rounded: "{rounded.md}"
    width: "200px"
  icon-card-hover:
    backgroundColor: "{colors.brand-navy}"
    textColor: "{colors.white}"
---

# Design System: CDEFF Sports Club

## 1. Overview

**Creative North Star: "The Matchday Kit"**

The system wears the club's colours the way a team wears its strip: deep royal navy is the jersey, crimson red is the trim, and there is no apology in either. This is an athletic identity, not a corporate one. Condensed uppercase type reads like a scoreboard and a matchday programme; angular clip-path dividers cut across the layout with the diagonal energy of a body in motion; the accent red is rationed like a captain's armband so it always means something. The register is "proud local club with real history," not "generic SaaS with a sporty photo."

Density is comfortable, not cramped: fluid `clamp()` spacing lets sections breathe on a large screen and tighten sensibly on a phone. The palette is **Committed** — navy carries whole dark sections end to end, red owns the interactive layer, and a single coastal cyan exists purely to keep accents legible on navy. Photography does the heavy lifting for warmth and place; the chrome around it stays disciplined.

This system explicitly rejects the beige-editorial landing page, the pastel wellness-app look, and the flat "startup blue + rounded everything" template. It is not a magazine and it is not a dashboard — it is a club's front door.

**Key Characteristics:**
- Navy-and-red team-colours identity, committed and unhedged.
- Condensed, uppercase, tracked display type (scoreboard energy).
- Angular clip-path section dividers as a signature motif.
- Red used sparingly as the interactive/accent voice.
- Soft ambient shadows and a consistent lift-on-hover language.

## 2. Colors

A committed two-colour club identity — royal navy and crimson red — grounded on a near-white mist and darkened for full-navy sections.

### Primary
- **Club Navy** (`#273E79`): The jersey colour. Carries every heading, the dark inverted sections (`section-dark`), hero overlays, and the entire brand ground. When a section needs authority, it goes full navy end to end.
- **Deep Navy** (`#21366B`): A darker navy used only in denser hero overlays (blog page header) where text needs more contrast over imagery.

### Secondary
- **Club Red** (`#BD3A4E`): The trim, the armband. Owns the interactive layer — primary buttons, link underlines, section-title accent bars, the subtitle dash. Kept deliberately scarce so it always signals "act here" or "this matters."
- **Red Deep** (`#A83245`): The pressed/hover state for red surfaces.
- **Red Bright** (`#C94E60`): The lighter stop in the primary button's diagonal gradient; adds dimension, never used flat on its own.

### Tertiary
- **Coastal Cyan** (`#3A9EBD`): Exists for one job — accents on full-navy sections, where crimson would fight the navy. Subtitle dashes and heading underlines switch to cyan inside `section-dark`.

### Neutral
- **Charcoal** (`#2F333A`): Body and navigation text on light grounds. Never pure black.
- **Mist Grey** (`#F5F5F5`): The page background. Keeps the whole site off-white so white cards and navy sections read as deliberate layers.
- **White** (`#FFFFFF`): Card surfaces, inverted text on navy/red, the glass navigation.

### Named Rules
**The Armband Rule.** Club Red is reserved for the interactive and emphasis layer — buttons, link underlines, accent bars — and should sit on roughly ≤10% of any screen. Its scarcity is what makes it read as important. Never wallpaper a section in red.

**The Cyan-On-Navy Rule.** Inside any full-navy (`section-dark`) block, accents switch from red to Coastal Cyan. Red on navy muddies; cyan cuts. This swap is automatic, not optional.

## 3. Typography

**Display Font:** Barlow Condensed (with Arial Narrow / sans-serif fallback)
**Body Font:** DM Sans (with Helvetica / Arial fallback)

**Character:** A hard contrast pairing — a tall, narrow, athletic condensed grotesque for everything loud, against a calm, humanist, low-weight sans for everything that has to be read. Barlow Condensed set in uppercase reads like signage and scoreboards; DM Sans at weight 300 keeps body copy quiet and open beneath it. The contrast axis (condensed display vs. open body) carries the whole hierarchy.

### Hierarchy
- **Display** (Barlow Condensed 500, `clamp(2.3rem, 8vw, 3.5rem)`, line-height ~1.05, UPPERCASE): Page `h1` and hero titles. Tracked slightly open so condensed caps don't collide.
- **Headline** (Barlow Condensed 500, `clamp(1.8rem, 5vw, 2.5rem)`, UPPERCASE): Section titles (`SectionTitle`), paired with the red accent underline.
- **Title** (Barlow Condensed 600, `clamp(1.5rem, 5vw, 2rem)`, UPPERCASE): Sub-section headings and card titles.
- **Body** (DM Sans 300, `clamp(0.9rem, 2.5vw, 1rem)`, line-height ~1.9): Paragraph copy. Generous leading offsets the light weight; cap measure at 65–75ch.
- **Label** (Barlow Condensed 500, `clamp(0.7rem, 2vw, 0.8rem)`, letter-spacing 0.125em, UPPERCASE): Buttons, subtitles/eyebrows, nav links, chips.

### Named Rules
**The Condensed-Caps Rule.** Every heading, button, nav link, and label is Barlow Condensed in UPPERCASE with open tracking. This is the club's voice; do not set headings in DM Sans or in sentence case.

**The Quiet-Body Rule.** Body copy is DM Sans at weight 300 with roomy line-height. Never bold body paragraphs for emphasis and never set body copy in uppercase — emphasis is the display font's job.

## 4. Elevation

The system is **soft-ambient, not flat and not heavy.** Depth comes from large, diffuse, low-opacity shadows tinted toward navy, plus a consistent "lift on hover" language: interactive surfaces translate upward a few pixels and deepen their shadow. Rest state is calm; motion toward the user signals interactivity. The navigation is the one glass surface — a translucent, blurred bar floating above the page.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 5px 4px 30px rgba(0,0,0,0.06)`): Default resting elevation for cards and icon tiles. Barely-there.
- **Card hover** (`box-shadow: 0 20px 40px rgba(39,62,121,0.12), 0 8px 16px rgba(39,62,121,0.08)`): Navy-tinted lift on card hover, paired with `translateY(-6px)`.
- **Card hover strong** (`box-shadow: 0 16px 32px rgba(39,62,121,0.18)`): Deeper lift for icon tiles that also invert to navy on hover.
- **Button hover** (`box-shadow: 0 6px 20px rgba(189,58,78,0.3)`): Red-tinted glow under a lifted primary button.
- **Button active** (`box-shadow: 0 2px 8px rgba(189,58,78,0.2)`): Pressed button settles back down.
- **Nav** (`box-shadow: 0 2px 8px rgba(0,0,0,0.06)`): The floating glass bar's faint drop.

### Named Rules
**The Lift Rule.** Interactive surfaces are flat-ish at rest and rise toward the user on hover (`translateY(-6px)` for cards, `-2px` for buttons) with a deeper, colour-tinted shadow. Shadows are a response to state, not decoration applied at rest.

**The Navy-Tint Rule.** Card shadows tint toward navy (`rgba(39,62,121,...)`) and button shadows toward red (`rgba(189,58,78,...)`). Pure-black shadows are only used at the faintest ambient level; coloured shadows are what make the depth feel on-brand.

## 5. Components

For each component, lead with its character, then shape, colour, states.

### Buttons
Tactile and decisive; square corners give them a competitive, non-rounded edge.
- **Shape:** Square (`0px` radius). Buttons deliberately break from the rounded card language.
- **Primary:** Club Red diagonal gradient (`#BD3A4E → #C94E60`), white uppercase Barlow Condensed label, letter-spacing ~2px, padding `12px 32px` (`py-3 px-8`). Optional chevron that nudges right on hover.
- **Hover / Focus:** Lifts `-2px`, gains the red glow shadow, deepens toward `#A83245`. Active state settles to `translateY(1px)` with the softer active shadow.
- **Secondary (outline):** 1px red border, red label on white. On hover a red panel wipes in left-to-right (sliding `background-position`) and the label flips to white, with the same lift.

### Chips / Icon Tiles
Selectable navy tiles used for sport/category selection.
- **Style:** 200px white tile, `md` radius, resting card shadow, centred icon + uppercase condensed title.
- **State:** On hover or when selected, inverts to full Club Navy with white icon/text, lifts, and reveals a red accent bar across the bottom (scaleX 0→1). Icon scales up ~1.15×.

### Cards / Containers
Editorial image-topped cards with a soft lift.
- **Corner Style:** `md` (12px) radius, overflow hidden.
- **Background:** White surface on the mist-grey page.
- **Shadow Strategy:** See Elevation — resting `card` shadow, navy-tinted `card-hover` on lift.
- **Border:** Hairline `1px solid rgba(39,62,121,0.06)`, deepening to `0.12` on hover.
- **Internal Padding:** `28px` (`p-7`), title in navy uppercase Barlow Condensed, body in DM Sans.

### Navigation
The one glass surface in the system.
- **Style:** Fixed, floating, translucent white bar (`bg-white/75`, `backdrop-blur-xl`), hairline white border, `2xl` rounded, faint drop shadow, inset from the viewport edges.
- **Typography:** Uppercase Barlow Condensed links in charcoal.
- **States:** Links grow a Club Red underline left-to-right on hover (`nav-link`). Dropdowns via Headless UI Popover.
- **Mobile:** Below `xl`, a hamburger opens a right-side glass `Dialog` panel with the same blur/border treatment; sub-menus expand with staggered item reveals.

### Signature: Angular Section Dividers
The system's most distinctive move. Sections and heroes are cut with `clip-path: polygon(...)` to create slanted top/bottom edges (`section-angle-top` / `section-angle-bottom`, hero clip at ~50px), with negative margins so consecutive sections interlock. The slant softens to ~20px on small screens. This diagonal motif — echoed in the primary button gradient and the diagonal-stripe background utility — is the club's kinetic signature.

## 6. Do's and Don'ts

### Do:
- **Do** set every heading, button, nav link, and label in Barlow Condensed, UPPERCASE, with open tracking (the Condensed-Caps Rule).
- **Do** keep Club Red on ≤10% of a screen, reserved for the interactive/emphasis layer (the Armband Rule).
- **Do** switch accents from red to Coastal Cyan inside full-navy sections (the Cyan-On-Navy Rule).
- **Do** lift interactive surfaces toward the user on hover with a colour-tinted shadow (`translateY(-6px)` cards, `-2px` buttons).
- **Do** use the `ease-smooth` curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for state transitions, at `0.25s`/`0.35s`.
- **Do** lean on real photography for warmth and place; keep the surrounding chrome disciplined.
- **Do** use the angular clip-path dividers as the signature transition between sections.
- **Do** provide the `prefers-reduced-motion` fallback for every reveal and entrance animation.

### Don't:
- **Don't** set headings or buttons in DM Sans or in sentence case — the display voice is condensed caps only.
- **Don't** bold body copy or set body copy in uppercase for emphasis; emphasis is the display font's job.
- **Don't** wallpaper sections in Club Red or let it drift past its ~10% budget.
- **Don't** put Club Red accents on navy grounds (muddy); use Coastal Cyan instead.
- **Don't** round the buttons — they are deliberately square against the rounded card language.
- **Don't** use pure-black heavy shadows at rest; depth is soft, ambient, and colour-tinted.
- **Don't** spread the navbar's glassmorphism to other surfaces — the translucent blur is the navigation's alone, not a decorative default.
- **Don't** collapse this into a generic "startup blue" or beige-editorial template; it is a proud local club, not a SaaS landing page.
