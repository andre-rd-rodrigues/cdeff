# Francisco Franco Sports Club ⚽️🏀

Welcome to the Francisco Franco Sports Club (CDEFF) repository! This is the club's website, offering the latest updates on club activities, blog articles, and detailed information on tournaments, in Portuguese and English.

## Getting Started 🚀

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Scripts

- `pnpm dev` – start the development server
- `pnpm build` – production build (validates all MDX, then generates the sitemap)
- `pnpm start` – serve the production build
- `pnpm lint` – run ESLint
- `pnpm test` – run the Vitest test suite

## Description 📖

CDEFF's website is a Next.js application that connects the club's members and sports fans. It uses Tailwind CSS for styling and stores its blog articles and tournaments as **local MDX files** in the repository, so content ships and versions with the code, no external CMS required.

## Project Structure 📁

- `content/blog/{pt,en}/` – Blog posts as MDX, one file per locale
- `content/tournaments/{pt,en}/` – Tournaments as MDX, one file per locale
- `src/app/[locale]/` – App Router pages (server `page.jsx` + client `*Page.jsx`)
- `src/components/` – Reusable UI components
- `src/data/` – Static data (basketball, futsal, company)
- `src/messages/` – i18n translations (`pt`, `en`)
- `src/lib/` – Content loader (`content.js`) and SEO helper (`metadata.js`)
- `src/styles/` – Fonts and global styles

## Technologies Used 🛠️

- **Next.js 16**: Core framework with the App Router and server components.
- **React 19**: UI library.
- **next-intl**: Internationalization for Portuguese and English.
- **Tailwind CSS + SCSS modules**: Utility-first styling with SCSS for animations and complex selectors.
- **MDX content**: `next-mdx-remote` renders Markdown/MDX, parsed from frontmatter with `gray-matter`.
- **next-sitemap**: Sitemap generation on build.
- **Day.js**: Date formatting across the platform.
- **Headless UI & Heroicons / Iconify**: Accessible UI components and icon sets.
- **Vitest & Testing Library**: Unit and component testing.

## Content Management ✍️

The blog and tournaments are plain MDX files under `content/`. A post or tournament is picked up **automatically at build time**, so there is no index to update:

- The route is resolved by the `slug` frontmatter field (keep it equal to the filename).
- Only entries with `published: true` are listed and routed; anything else is skipped.
- Each locale is independent: ship a matching `pt` and `en` file with language-specific slugs.

The data layer lives in `src/lib/content.js` (`getPosts`, `getPost`, `getTournaments`, `getTournament`).

## Highlights 💡

- **Local MDX content**: Blog and tournaments authored in the repo, no CMS to maintain.
- **Full i18n**: Locale-prefixed routes and translated UI for Portuguese and English.
- **SEO built in**: Per-route metadata (`generateMetadata` + `src/lib/metadata.js`) and an auto-generated sitemap.
- **Responsive design**: Mobile-first with Tailwind CSS for all devices.

Enjoy exploring the club's activities and engaging with the sports community through our platform! 🏆
