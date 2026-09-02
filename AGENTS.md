# CDEFF Sports Club – Agent Guidelines

## Project Overview

Francisco Franco Sports Club (CDEFF) website – a Next.js 16 app with App Router, internationalization (Portuguese and English via next-intl), and Notion as CMS for blog and tournaments. Sports: Basketball and Futsal.

## Tech Stack

- **Framework**: Next.js 16, App Router at `src/app/`
- **i18n**: next-intl (locales: `pt`, `en`)
- **Styling**: Tailwind CSS + SCSS modules
- **CMS**: Notion API (blog posts, tournaments)
- **Package manager**: pnpm
- **Testing**: Jest + React Testing Library

## Directory Structure

```
src/
├── app/[locale]/          # App Router pages (page.jsx + *Page.jsx)
├── components/            # Reusable UI components
├── data/                  # basketball.js, futsal.js, company.js
├── hooks/                 # useTranslationsArray, useSportSelect, useIsMobile
├── i18n/                  # routing.js, request.js
├── lib/                   # notion.js (Notion API client)
├── messages/              # pt.json, en.json (translation files)
└── styles/                # fonts.js, globals.scss
```

## Development Guidelines

- **Tailwind first**: Prefer Tailwind utility classes for layout, spacing, colors.
- **SCSS modules**: Use only when you need SCSS features (animations, `@keyframes`, pseudo-elements like `::after`, complex selectors).
- **Fonts**: Barlow (Barlow Condensed) for headings; DM Sans for body. Import from `@/styles/fonts`.
- **Components**: PascalCase names (e.g. `HeroSection`, `ProductCard`). One component per file.
- **Data**: Import from `src/data/`; files export arrays or objects.

## Important Patterns

- **Pages**: Use `"use client"` with `useTranslations` for client components. Server pages fetch data (e.g. Notion) and pass to client page components.
- **i18n**: `useTranslations()` or `useTranslations("pages.homepage")` for scoped keys. Keys follow nested structure in `messages/*.json`.
- **Data files**: Export arrays of objects (e.g. `basketTeamsImages`, `futsalTechnicalTeam`) or objects with arrays. No side effects.
- **Routing**: Locale in path (`/[locale]/...`). Use `Link`, `useRouter`, `usePathname` from `next-intl/navigation`.
