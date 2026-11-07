# marabyte.com

Source for [www.marabyte.com](https://www.marabyte.com). It is a static site built with [Astro](https://astro.build) and served by [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/).

## Develop

```sh
npm install
npm run dev       # local dev server
npm run build     # static build into ./dist
npm run preview   # build, then serve ./dist with wrangler (same routing/redirects as production)
```

## Content

Posts live in `src/content/posts/*.md`. The `slug` frontmatter field sets the URL (`/post/<slug>/`). Featured images go in `src/assets/uploads/`, and the optional `featured_image.social` PNG goes in `public/uploads/`.

## Deploy

Pushes to `main` deploy through Cloudflare's Git integration (`npm run build`, then `npx wrangler deploy`). Redirects live in `public/_redirects`.
