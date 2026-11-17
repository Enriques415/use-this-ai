# Use This AI

Find the right AI for the job.

Use This AI is a public directory of AI tools organized by real tasks. You describe the work, open a scenario, and follow a short guide for a ranked tool. The catalog lives in structured files under `data/` so a later pipeline can generate it.

This MVP does not include accounts, billing, scraping, or email campaigns.

## Run it locally

```bash
npm install
npm run dev -- --port 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run lint
npm run build
```

## Content

- `data/scenarios.ts` — jobs, example phrasing, and ranked tools
- `data/tools/` — tools, pricing notes, official URLs, and step-by-step usages
- `data/catalog.ts` — joins the layers and fails the build if a link is missing
- `lib/search.ts` — matches a query to scenarios, including aliases

Saving a tool uses `localStorage` in the browser. There is no email form, because there is no waitlist backend.

## Deploy

The app is a Next.js App Router project and deploys on Vercel with no environment variables required.

Optional: set `NEXT_PUBLIC_SITE_URL` to the public production origin (no trailing slash) so canonical URLs and the sitemap use that host. If it is unset, the app uses `VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL` when Vercel provides them.
