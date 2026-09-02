# CDEFF Sports Club – Agent Guidelines

## Project Overview

Francisco Franco Sports Club (CDEFF) website – a Next.js 16 app with App Router, internationalization (Portuguese and English via next-intl), and **local MDX files as the content source** for the blog and tournaments. Sports: Basketball and Futsal.

## Tech Stack

- **Framework**: Next.js 16 (App Router at `src/app/`), React 19
- **i18n**: next-intl (locales: `pt`, `en`)
- **Styling**: Tailwind CSS (v3) + SCSS modules
- **Content**: Local MDX in `content/`, parsed with `gray-matter`, rendered with `next-mdx-remote`
- **Package manager**: pnpm
- **Testing**: Vitest + React Testing Library (jsdom)
- **SEO**: Per-route `generateMetadata`; sitemap via `next-sitemap` (`postbuild`)

## Directory Structure

```
content/
├── blog/{pt,en}/*.mdx        # Blog posts, one file per locale
└── tournaments/{pt,en}/*.mdx # Tournaments, one file per locale

src/
├── app/[locale]/          # App Router routes (page.jsx server + *Page.jsx client)
├── components/            # Reusable UI components
├── data/                  # Static data: basketball.js, futsal.js, company.js
├── hooks/                 # useIsMobile, useScrollReveal, useSportSelect, useTranslationsArray
├── i18n/                  # routing.js, request.js
├── lib/                   # content.js (MDX loader), metadata.js (SEO helper)
├── messages/              # pt.json, en.json (translation files)
└── styles/                # fonts.js, globals.scss
```

## Commands

- `pnpm dev` – start the dev server
- `pnpm build` – production build (also validates all MDX; runs `next-sitemap` via `postbuild`)
- `pnpm lint` – ESLint
- `pnpm test` – Vitest (`test:watch`, `test:coverage` also available)

## Development Guidelines

- **Tailwind first**: Prefer Tailwind utility classes for layout, spacing, colors.
- **SCSS modules**: Use only when you need SCSS features (animations, `@keyframes`, pseudo-elements like `::after`, complex selectors). Global tokens live in `styles/globals.scss` as CSS variables; body text defaults to `--text-body`.
- **Fonts**: Barlow (Barlow Condensed) for headings; DM Sans for body. Import from `@/styles/fonts`.
- **Components**: PascalCase names (e.g. `HeroSection`, `ProductCard`). One component per file.
- **Data**: Import static arrays/objects from `src/data/`. No side effects.

## Important Patterns

- **Routes**: Each route is a server `page.jsx` that `await`s `params`, calls `setRequestLocale(locale)`, fetches any content (via `src/lib/content.js`), and renders a client `*Page.jsx`. Client components use `"use client"` + `useTranslations`.
- **Content (blog/tournaments)**: There is **no external CMS**. `src/lib/content.js` exposes `getPosts` / `getPost` / `getTournaments` / `getTournament`, reading `content/<type>/<locale>/*.mdx`. Files are discovered automatically at build via `generateStaticParams`; routes resolve by the `slug` frontmatter field, and only `published: true` items are served.
  - Blog frontmatter: `title`, `description`, `slug`, `date`, `image`, `published` (and optional `category` used for filtering).
  - Tournament frontmatter: `title`, `description`, `slug`, `dateStart`, `dateEnd`, `image`, `location`, `sport`, `published`.
- **Metadata/SEO**: Base metadata is set in `src/app/[locale]/layout.js` (`generateMetadata`); each route adds its own via the `pageMetadata` helper in `src/lib/metadata.js`, pulling titles from the `common.metadata.*` translation keys. Dynamic routes derive title/description/image from the item frontmatter.
- **i18n**: `useTranslations()` or `useTranslations("pages.homepage")` for scoped keys. Keys follow the nested structure in `messages/*.json`.
- **Routing**: Locale in path (`/[locale]/...`). Use `Link`, `useRouter`, `usePathname` from `@/i18n/routing`.
