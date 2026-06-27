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
- `api/_lib/promptSecurity.ts` adds a small server-side safety wrapper and hard-blocks obvious abuse.
- Hermes is the source of truth for the website-agent knowledge base and persona.
- The website backend does not inject local project/research knowledge into prompts.
- Response caching is disabled so follow-up questions cannot receive stale standalone answers.

Production setup on Vercel:

1. Open the Vercel project.
2. Go to Settings → Environment Variables.
3. Add `HERMES_API_URL` with value `https://api.junzheshi.com`.
4. Add `HERMES_API_KEY` with the Hermes key.
5. Apply both to Production, Preview, and Development if you want all environments to work.
6. Redeploy the latest production deployment after saving the variables.

## Personal Website Inventory Audit

Read-only audit completed. I did not modify files during the audit. `git status -sb` remained clean at the time of audit: `## main...origin/main`.

### 1. Files Inspected

Core implementation:

- `client/src/app/router.tsx`
- `client/src/components/layout/Header.tsx`
- `client/src/components/layout/Footer.tsx`
- `client/src/components/layout/SiteLayout.tsx`
- `client/src/content/siteContent.ts`
- `client/src/pages/HomePage.tsx`
- `client/src/pages/ProjectsPage.tsx`
- `client/src/pages/AtlasCaseStudyPage.tsx`
- `client/src/pages/PdrCaseStudyPage.tsx`
- `client/src/pages/ResearchPage.tsx`
- `client/src/pages/ContactPage.tsx`
- `client/src/pages/ResumePage.tsx`
- `client/src/features/assistant/ChatWidget.tsx`
- `client/src/features/assistant/api.ts`
- `client/src/features/assistant/useAssistant.ts`

Assets inspected:

- `client/public/resume.pdf`
- `client/public/ppt/AI Enabled SWE Final Presentation.pptx`
- Atlas screenshots under `client/public/screenshots/atlas-*`
- LaunchStack screenshots under `client/public/screenshots/pdr-*`

Public URL checks:

- `https://junzheshi.com/` returned HTTP `200`.
- Atlas demo returned HTTP `200`.
- LaunchStack demo returned HTTP `200`.
- LaunchStack repo and commit returned HTTP `200`.
- All four DOI links returned HTTP `200` after redirect.
- GitHub profile returned HTTP `200`.
- LinkedIn returned HTTP `999` to curl, likely anti-bot behavior rather than confirmed breakage.

### 2. Site Map

| Path | Page title / role | Content | Header | Footer | Homepage |
|---|---|---|---:|---:|---:|
| `/` | Homepage | Hero, Evidence Snapshot, Start Here, flagship projects, resume, contact, Ask Junzhe widget | Brand | implicit | yes |
| `/projects` | Projects | Flagship project cards plus selected engineering experience | yes | yes | yes |
| `/projects/atlas` | Atlas case study | Problem, stack, role, architecture, workflow, evaluation notes, screenshots | no direct header | no | yes via project card |
| `/projects/pdr-ai` | LaunchStack case study | Problem, stack, role, architecture, proof carousels, technical notes, repo/commit links | no direct header | no | yes via project card |
| `/research` | Research | Research snapshot, domains, timeline, selected DOI-linked publications | yes | yes | yes |
| `/publications` | Redirect | Redirects to `/research#publications` | no | no | no direct link |
| `/resume` | Redirect | Redirects to `/#resume` | header uses `/#resume` | no | resume section |
| `/contact` | Redirect | Redirects to `/#contact` | header uses `/#contact` | footer uses `/#contact` | contact section |
| `/ask-junzhe` | Redirect | Redirects to `/`; assistant is a floating widget | no | no | widget visible |

Unrouted but present:

- `ContactPage.tsx` exists but is not mounted in the router.
- `ResumePage.tsx` exists but is not mounted in the router.

### 3. Homepage Inventory

| Section | Current content | Evidence-based or abstract | Concise? | Stats / metrics |
|---|---|---|---:|---|
| Hero | "Junzhe Shi builds research-driven AI systems for real human decision-making." Intro says JHU CS + AMS student, deep-dive layer behind GitHub README. CTAs: Projects, Research, Resume. | Mostly positioning, supported by nearby project links | yes | no |
| Evidence Snapshot | `2` Flagship AI systems, `2` Public case studies, `4` Research directions, `2` Engineering tracks | Evidence-based by site content | yes | yes, defensible site-backed counts |
| Right hero card | "What I Build" with Atlas and LaunchStack links; "Research Lens" with grounding/retrieval/evaluation/human review | Moderate evidence due project links, some abstract research language | yes | no |
| Start Here | Three cards: Projects, Research, Contact | Navigational, not evidence-heavy | yes | no |
| Public Flagship Projects | Atlas and LaunchStack cards with large screenshots, summaries, and first four links | Stronger evidence: screenshots, demos, case studies, repo for LaunchStack | yes | no new stats |
| Research section | No full homepage research section; research appears as hero lens and Start Here link | Supporting context only | yes | no |
| Engineering experience | Not on homepage except Evidence Snapshot count; details live on `/projects` | Evidence-light on homepage | yes | `2 Engineering tracks` |
| Resume | Download resume PDF | Evidence link | yes | no |
| Contact | Email, LinkedIn, GitHub cards | Direct contact evidence | yes | no |
| Footer | Projects, Research, Contact, Email | Navigational | yes | dynamic copyright year |

### 4. Project Inventory

| Project | Category | Links shown | Link status | Assets | Case study | Architecture | Evaluation/testing | Contribution | Research significance |
|---|---|---|---|---|---:|---:|---:|---:|---:|
| Atlas | Flagship project | Case Study, Live Demo, Screenshots, Presentation | Demo `200`; internal routes/assets present | 3 screenshots, large card hero image, logo | yes | yes | yes, including `14 golden` CI claim | yes | yes |
| LaunchStack | Flagship project | Case Study, Live Demo, GitHub, Screenshots, Commit Proof | Demo/repo/commit `200`; internal routes/assets present | 8 screenshots, carousel galleries, logo | yes | yes | yes, including `18 unit tests` claim | yes | yes |
| ReferMe | Engineering experience | none | no visible links | none | no | implied via "Review lens" only | no | broad | no |
| Go Microservices | Engineering experience | none | no visible links | none | no | broad | no | broad | no |

### 5. Atlas-Specific Audit

Atlas does not currently show a GitHub/repository link.

Findings:

- No "View Repository," "GitHub," or public source-code link appears on the Atlas card or Atlas case study.
- Atlas is labeled "Public flagship - Decision support" in `siteContent.ts`, but the public evidence shown is demo/presentation/screenshots/case study, not source code.
- The Atlas case study links to the deployed website and presentation only.
- The site does not explicitly say Atlas source code is public.
- The site does not mention private implementation/code availability.

Given the permission "you may make a personal copy of the repo and redeploy it," current wording is mostly safe because it does not claim public repo availability. The only mild risk is the word "Public" near Atlas, which could be misread as public source. It is safer if "public" clearly means "public demo/case study."

### 6. Research Inventory

Current research tracks shown:

- Healthcare AI Research Support, `2026 - Present`
- Perovskite Solar Cell Optimization, `2023 - 2024`
- Exoplanet Transit Modeling, `2022 - 2023`
- Subatomic Physics / Glauber Monte Carlo, `2021 - 2022`

Research page sections:

- Hero: scientific modeling for decisions under uncertainty
- Research Snapshot
- Research Domains
- Research Timeline
- Selected Publications

Publications/research outputs shown:

- 4 selected DOI-linked publications.

DOI links shown:

- `10.1039/D3TC01711G`
- `10.54254/2753-8818/28/20230428`
- `10.54254/2753-8818/11/20230390`
- `10.54254/2753-8818/34/20240704`

Numeric research stats/claims shown:

- "approximately 10% to 20%" efficiency gain in `siteContent.ts`
- "high-fit predictive accuracy" in `siteContent.ts`
- "10,000+ collision simulation analysis" in `siteContent.ts`
- 4 DOI-linked outputs appear, but the homepage does not currently claim a publication count.

Claims that may need stronger evidence:

- Healthcare AI `2026 - Present` current research status.
- "approximately 10% to 20%" efficiency gain.
- "high-fit predictive accuracy."
- "10,000+ collision simulation analysis."
- Atlas `14 golden` CI cases.
- LaunchStack `18 unit tests`.

### 7. Placeholder / Unfinished Content Audit

| File / line | Exact text | User-visible? | Assessment |
|---|---|---:|---|
| `ChatWidget.tsx:215` | `placeholder="Ask about projects, research, skills..."` | yes | keep; normal input hint |
| `api.ts:17` | `Ask Junzhe is unavailable right now.` | yes, error state | keep or soften; not a placeholder |
| `useAssistant.ts:48` | `Ask Junzhe is unavailable right now.` | yes, error state | keep or soften; not a placeholder |
| `PdrCaseStudyPage.tsx:115` | `Turn research into an editable draft` | yes | keep; "draft" is content, not unfinished |
| `PdrCaseStudyPage.tsx:521` | `legal drafting interface` | yes | keep; domain wording |
| `client/README.md:45` | `Response caching is disabled...` | internal only | keep |
| `client/package.json:3` | `"private": true` | internal only | keep |
| `ScreenshotCard.tsx:19` | `src.replace(...)` | internal only | keep |

No user-visible `TODO`, `coming soon`, `lorem`, `fake`, `future asset`, or `missing` content found in the website UI.

### 8. Link Audit

| Link | Status | Notes |
|---|---|---|
| `https://junzheshi.com/` | working | HTTP `200` |
| `/projects` | working | implemented route |
| `/projects/atlas` | working | implemented route |
| `/projects/pdr-ai` | working | implemented route |
| `/research` | working | implemented route |
| `/#resume` | working | homepage section exists |
| `/#contact` | working | homepage section exists |
| `/publications` | working | redirects to `/research#publications` |
| `/resume` | working | redirects to `/#resume` |
| `/contact` | working | redirects to `/#contact` |
| `/ask-junzhe` | working | redirects to `/` |
| `/resume.pdf` | working locally | file exists |
| `/ppt/AI Enabled SWE Final Presentation.pptx` | working locally | file exists |
| Atlas demo | working | HTTP `200` |
| LaunchStack demo | working | HTTP `200` |
| LaunchStack repo | working | HTTP `200` |
| LaunchStack commit | working | HTTP `200` |
| DOI links | working | all checked HTTP `200` |
| `mailto:jshi70@jh.edu` | likely working | mailto link |
| GitHub profile | working | HTTP `200` |
| LinkedIn | questionable by curl only | returned `999`, common LinkedIn anti-bot response |

Misleading link text:

- No obviously fake Demo/Repo/Case Study/Screenshot link found.
- Atlas has no repo button, which is good.
- "Public flagship" for Atlas could be clarified if you want to avoid public-source ambiguity.

### 9. Evidence Quality Audit

| Page / area | Evidence quality | Why |
|---|---|---|
| Homepage hero | moderate | clear identity and CTAs; evidence snapshot nearby |
| Homepage Evidence Snapshot | moderate | counts are backed by site content, but not externally sourced |
| Homepage flagship projects | strong | screenshots, demos, case studies, repo for LaunchStack |
| Projects page flagship cards | strong | large screenshots, stacks, research lens, multiple evidence links |
| Engineering experience section | weak to moderate | concise but no links, screenshots, case studies, or repo evidence |
| Atlas case study | strong | screenshots, architecture, role, evaluation notes, presentation/demo |
| LaunchStack case study | strong | demo, repo, commit, screenshots, architecture, testing notes |
| Research page | moderate to strong | DOI links are strong; current research support is less externally evidenced |
| Ask Junzhe | moderate | useful interactive surface; Markdown is sanitized and links are safer |

### 10. Risk Audit

| Priority | Risk | File / line | Notes |
|---|---|---|---|
| High | Atlas "public" wording may be misread as public source | `siteContent.ts:73` | No repo link exists, but wording could be clearer |
| High | Atlas `14 golden cases` is a specific test claim without visible public proof | `AtlasCaseStudyPage.tsx:26`, `AtlasCaseStudyPage.tsx:57` | Keep only if defensible from Atlas repo/course artifacts |
| Medium | LaunchStack `18 unit tests` is specific | `PdrCaseStudyPage.tsx:41`, `PdrCaseStudyPage.tsx:506` | Safer because public repo/commit exists, but verify count |
| Medium | Perovskite `approximately 10% to 20%` claim | `siteContent.ts:178` | Needs publication support or softer wording |
| Medium | "high-fit predictive accuracy" | `siteContent.ts:194` | Sounds metric-like without number/source nearby |
| Medium | `10,000+ collision simulation analysis` | `siteContent.ts:207` | Numeric claim should be publication-backed |
| Medium | Healthcare AI `2026 - Present` | `siteContent.ts:151` | Current-status claim; keep only if still accurate |
| Low | Unrouted Contact/Resume pages | `ContactPage.tsx:21`, `ResumePage.tsx:6` | Not user-visible, but dead code can confuse maintenance |
| Low | LinkedIn curl status `999` | `HomePage.tsx:316` | Likely anti-bot, not confirmed broken |
| Low | Ask Junzhe unavailable wording | `api.ts:17` | Fine as an error state, but visible when API fails |

### 11. What The Website Currently Does Well

- Clear research-oriented positioning without making the homepage a resume wall.
- Evidence Snapshot is compact and first-viewport-oriented.
- Atlas and LaunchStack are correctly treated as the main proof.
- Project cards now use large, readable screenshots rather than tiny screenshot strips.
- LaunchStack has strong inspectability: demo, repo, commit proof, screenshots, case study.
- Atlas avoids claiming a public repo.
- Research page is much more concrete than before: tracks, timeline, contributions, DOI links.
- Contact is easy to find from header, footer, homepage, and Ask Junzhe.
- Ask Junzhe remains a highlight without dominating the site.
- Bot Markdown rendering is safer: `react-markdown`, `remark-gfm`, `rehype-sanitize`, and `noopener noreferrer`.

### 12. Top 10 Issues Ranked

1. Clarify Atlas "public" wording so it cannot imply public source code.
2. Verify or soften Atlas `14 golden cases`.
3. Verify or cite LaunchStack `18 unit tests`.
4. Add stronger evidence links for current Healthcare AI research if available.
5. Add evidence or soften "approximately 10% to 20%" efficiency gain.
6. Add evidence or soften "high-fit predictive accuracy."
7. Add evidence or soften "10,000+ collision simulation analysis."
8. ReferMe and Go Microservices are evidence-light compared with flagship projects.
9. Contact/Resume components exist but are not routed, creating maintenance ambiguity.
10. LinkedIn cannot be verified via curl, though likely due platform blocking.

### 13. Top 10 Safe Improvements

1. Change Atlas label from "Public flagship" to "Public demo / case study" or similar.
2. Add a one-line Atlas availability note: demo/presentation public, source not linked.
3. Link Atlas evaluation/test claims to presentation slides or visible proof if available.
4. Link LaunchStack `18 unit tests` directly to the relevant repo path or commit diff if possible.
5. Add source/context links for research numeric claims where DOI pages support them.
6. Add lightweight detail pages or expandable cards for ReferMe and Go Microservices only if real evidence exists.
7. Add a small "Evidence type" label to research outputs: paper, DOI, project, demo, repo.
8. Keep homepage concise and move extra research detail only to `/research`.
9. Remove or route unused `ContactPage` / `ResumePage` later if they are genuinely dead code.
10. Consider one short GIF/video for Atlas or LaunchStack interaction if available, especially for AI-agent behavior.

### 14. What Should Not Be Changed

- Do not add an Atlas repo link unless public sharing is explicitly authorized.
- Do not make the homepage research-heavy.
- Do not remove Ask Junzhe; it is useful and appropriately contained.
- Do not replace project evidence with generic claims.
- Do not remove the large project card screenshots.
- Do not remove Contact from header/footer.
- Do not invent publication counts, benchmark numbers, user metrics, stars, commits, or performance claims.

### 15. Public Share Readiness

Mostly ready to share with professors/recruiters.

I would call it ready with minor wording-risk cleanup before broad sharing. The strongest current version is the portfolio narrative plus Atlas/LaunchStack proof. The main thing to tighten is claim precision: Atlas source availability, specific test counts, and research numeric claims should either be visibly sourced or softened.
