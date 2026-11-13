# beardmoredevelopment.com

One-page static site. Astro + Tailwind CSS v4, served by GitHub Pages.

- **Copy:** all wording lives in `src/data/site.ts`.
- **Dev:** `npm install`, then `npm run dev`.
- **Build:** `npm run build` builds to `dist/` and then runs `scripts/check-dist.mjs`, which fails if the output contains a banned string.
- **Deploy:** `./deploy.sh` builds and force-pushes `dist/` to the `gh-pages` branch of `origin`. `public/CNAME` holds the domain.
