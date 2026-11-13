# beardmoredevelopment.com

Small static site. Astro + Tailwind CSS v4, served by GitHub Pages.

## Pages

| URL | Source |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/services/` | `src/pages/services/index.astro` |
| `/services/<slug>/` | `src/pages/services/[slug].astro`, one page per entry in `src/data/services.ts` |
| `/work/` | `src/pages/work.astro` |
| `/about/` | `src/pages/about.astro` |
| `/contact/` | `src/pages/contact.astro` |
| 404 | `src/pages/404.astro` |

Every page uses `src/layouts/Base.astro`, which holds the `<head>`, the nav and the title-block footer.

## Copy

All wording lives in `src/data/`:

- `site.ts`: site-wide text (nav, email, footer) and the home, about, contact and 404 pages.
- `services.ts`: the four services. Adding an entry adds a card and a page.
- `work.ts`: the work history by employer.

## Commands

- **Dev:** `npm install`, then `npm run dev`.
- **Build:** `npm run build` builds to `dist/` and then runs `scripts/check-dist.mjs`, which fails if the output contains a banned string or a broken internal link.
- **Type check:** `npm run check`.
- **Deploy:** `./deploy.sh` builds and force-pushes `dist/` to the `gh-pages` branch of `origin`. `public/CNAME` holds the domain.
