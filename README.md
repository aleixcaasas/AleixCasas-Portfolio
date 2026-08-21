# aleixcaasas.netlify.app

My portfolio, built with Astro and Tailwind.
Available in [English](https://aleixcaasas.netlify.app), [Catalan](https://aleixcaasas.netlify.app/ca/) and [Spanish](https://aleixcaasas.netlify.app/es/).

## Stack

- **Astro 5** — static output, no client-side JavaScript beyond the theme toggle and the mobile menu
- **Tailwind CSS 3**
- **Netlify** — deploys from `master` on every push

## How it is put together

- **All copy lives in `src/i18n/{en,ca,es}.json`.** Components take a `t` prop and render from it, so adding a language means adding one JSON file and one page — no markup is duplicated.
- **`src/components/Site.astro`** renders the whole page, which keeps the three locales identical in structure by construction.
- **Light/dark theme** with system detection, applied before first paint so there is no flash of the wrong theme.
- **Per-locale `<html lang>`, canonical, Open Graph and `hreflang` alternates**, plus `x-default`.
- Projects are written as **case studies rather than repository links**: most of what I build is either private or owned by a client.

## Running it locally

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # → dist/
```

Requires **Node 20+** (Astro 5). The version is pinned in `.nvmrc` and `netlify.toml`.

## A note on deployment

The repo previously carried a `base` path for GitHub Pages while the site was served from the root of a Netlify domain, which broke every image URL. There is now a single deployment path — Netlify — and no `base` in `astro.config.mjs`.
