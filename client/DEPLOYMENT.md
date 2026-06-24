# Deployment Guide

This project is configured for SPA deployment with route fallback and social metadata previews.

## Included Config

- `vercel.json`: Vercel build + SPA rewrite + static asset cache headers
- `netlify.toml`: Netlify build + SPA redirect + static asset cache headers
- `public/_redirects`: Netlify fallback for direct route loads
- `public/404.html`: Static-host fallback redirect for deep links

## Deploy to Vercel

1. Import the `client/` folder as a Vercel project.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Ensure framework preset is Vite.

## Deploy to Netlify

1. Create a new site from the `client/` directory.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. `netlify.toml` and `_redirects` are already configured.

## Deploy to Render Free

This repository includes a root blueprint at `render.yaml` for a static site deployment.

1. In Render, create a new Blueprint and point it to this repository.
2. Confirm the service definition from `render.yaml`:
   - runtime: static
   - plan: free
   - build command: `cd client && npm ci && npm run build`
   - publish path: `client/dist`
3. Deploy.

### Optional: Trigger Render from GitHub Actions

A workflow is included at `.github/workflows/render-deploy.yml`.

1. In Render, open your static site and copy the Deploy Hook URL.
2. In GitHub repository settings, add secret `RENDER_DEPLOY_HOOK_URL`.
3. Push to `main` (or run workflow manually) to trigger Render deploy.

## Metadata Preview Notes

`index.html` includes Open Graph and Twitter tags for link previews.

- `og:image` and `twitter:image` currently point to `/screenshots/atlas-live-hero.png`.
- For production-quality social cards, replace this image with a dedicated 1200x630 preview.
