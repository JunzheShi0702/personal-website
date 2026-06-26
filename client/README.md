# Junzhe Shi Portfolio

This is a React + TypeScript + Vite portfolio deployed to Vercel.

## Ask Junzhe AI chatbot

The floating “Ask Junzhe” widget calls the local server-side route:

```txt
POST /api/chat
```

The browser never calls Hermes directly and never receives the Hermes API key.

Required server-side environment variables:

```bash
HERMES_API_URL=https://api.junzheshi.com
HERMES_API_KEY=
```

Local Vercel-style test:

```bash
cd client
HERMES_API_URL=https://api.junzheshi.com HERMES_API_KEY=your_key npx vercel dev
```

Then test the API:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"message":"What projects has Junzhe built?","history":[]}'
```

Implementation notes:

- `api/chat.ts` is the Vercel serverless route.
- `api/_lib/hermesClient.ts` calls `${HERMES_API_URL}/v1/chat/completions` with `gpt-5.4-mini` and `stream: false`.
- `api/_lib/rateLimiter.ts` applies in-memory per-IP limits of 8 requests/minute and 80 requests/day.
- `api/_lib/cache.ts` caches repeated questions for 5 minutes.
- `api/_lib/promptSecurity.ts` adds server-side scope and prompt-injection guardrails.
- `src/lib/junzheKnowledge.ts` contains the initial structured website knowledge base and TODOs for resume, transcript summary, research summaries, papers, and project details.

Production setup on Vercel:

1. Open the Vercel project.
2. Go to Settings → Environment Variables.
3. Add `HERMES_API_URL` with value `https://api.junzheshi.com`.
4. Add `HERMES_API_KEY` with the Hermes key.
5. Apply both to Production, Preview, and Development if you want all environments to work.
6. Redeploy the latest production deployment after saving the variables.
