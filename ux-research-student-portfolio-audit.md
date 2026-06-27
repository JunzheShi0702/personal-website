# UX / Research-Student Portfolio Audit

No implementation changes were made during this audit.

## Files Inspected

- `client/src/components/layout/Header.tsx`
- `client/src/components/layout/SiteLayout.tsx`
- `client/src/components/layout/Footer.tsx`
- `client/src/app/router.tsx`
- `client/src/pages/HomePage.tsx`
- `client/src/pages/AtlasCaseStudyPage.tsx`
- `client/src/pages/PdrCaseStudyPage.tsx`
- `client/src/pages/ResearchPage.tsx`
- `client/src/pages/ContactPage.tsx`
- `client/src/pages/ResumePage.tsx`
- `client/src/content/siteContent.ts`
- `client/src/features/assistant/ChatWidget.tsx`
- `client/src/features/assistant/useAssistant.ts`
- `client/src/features/assistant/api.ts`
- `client/api/chat.ts`
- `client/src/index.css`
- UI cards, package metadata, and public screenshots/assets

## Current Implementation Summary

The site is already clean, concise, and research/professional in tone. The homepage positions Junzhe as a research engineering student, highlights Atlas and LaunchStack/PDR AI, and keeps the main text compact. Ask Junzhe is a persistent floating assistant, closed by default, so it is visible without taking over unless opened.

The strongest current evidence is on the case-study pages. Atlas has a live deployment link, presentation link, problem/motivation, architecture, workflow, personal contributions, testing/eval references, and screenshots. LaunchStack/PDR AI is stronger on clickable evidence: live deployment, GitHub repo, commit link, screenshot carousel, role, workflow, implementation notes, and tests.

The main weakness is discoverability and inspection flow: there is no true `/projects` index, the header "Projects" goes directly to Atlas, contact is not in the header, and homepage project cards do not expose demo/repo/screenshot/writeup links directly.

## Gap Analysis

| Requirement | Current status | Gap | Suggested change | Priority |
|---|---|---|---|---|
| 1. Clean and concise | Strong. Homepage copy is restrained; visual style is consistent. | Some sections use many nested cards, but not excessive. | Preserve current visual direction. | Low |
| 2. Ask Junzhe highlight, not dominant | Closed floating button in `ChatWidget.tsx`; open panel is large but user-triggered. | On mobile, open chat occupies most viewport. Acceptable for a chat state. | Keep default closed; optionally add a subtle homepage mention rather than a large hero treatment. | Low |
| 3. Project evidence links | PDR has demo/repo/commit links. Atlas has demo + presentation, but no GitHub repo link. Homepage cards only link to case studies. | Evidence is mostly hidden one click deeper; Atlas repo absent if public. No GIF/video assets. | Add direct demo/repo/writeup links on project cards and Atlas repo link if available. | High |
| 4. Research-student project framing | Atlas and PDR include motivation, stack-ish architecture, contributions, tests/eval. | Research relevance/broader significance is implicit, not consistently labeled. Stack is split across architecture prose. | Add compact "At a glance" metadata on each case study: Problem, Stack, My role, Evaluation, Significance. | High |
| 5. Projects, Research, Contact easy to find | Header has Projects, Research, Resume. | Contact missing from header. Projects points to Atlas, not a project overview. | Add Contact nav item and create/use a project index route. | High |
| 6. Contact visibility | Contact block exists on homepage; `/contact` redirects to anchor. | It is reachable, but not obvious from top nav. Footer has no contact link. Bot is not enough for professional visitors. | Make Contact visible in header or footer, ideally both. | High |
| 7. Avoid homepage clutter | Good. Homepage uses short hero, short cards, and links to deeper pages. | "Three Deep Paths" says three but content has two pathway cards in `siteContent.ts`. | Fix label/count or add missing third pathway. | Medium |
| 8. Click-to-inspect design | Case-study links exist on homepage. | Project cards lack direct inspect affordances: demo, repo, screenshots, writeup chips. | Keep cards short but add small link row: Case study, Demo, Repo, Screenshots. | High |
| 9. AI/agent GIF/video | Static screenshots exist for Atlas and PDR. | Agent interactions would benefit from short GIF/video, especially Atlas chat schedule edits and LaunchStack rewrite flow. | Add one 10-20s silent loop per flagship case study. | Medium |
| 10. Markdown bot links render safely | Good. Uses `react-markdown`, `remark-gfm`, `rehype-sanitize`, and link `rel="noopener noreferrer"` in `ChatWidget.tsx`. | Looks safe for normal Markdown links. Malicious URL cases were not live-run. | Optional: add tests for Markdown link rendering/sanitization. | Medium |

## Top 5 Most Valuable Improvements

1. Add Contact to primary navigation.
2. Add a real Projects index instead of sending "Projects" straight to Atlas.
3. Add direct evidence links on project cards: case study, demo, repo, screenshots/writeup.
4. Add "At a glance" blocks to Atlas and PDR covering stack, role, evaluation, significance.
5. Add short GIF/video demos for Atlas agent scheduling and LaunchStack/PDR AI interaction.

## What Should Not Change

- Keep the concise homepage.
- Keep Ask Junzhe as a floating assistant rather than a dominant hero.
- Keep the existing case-study depth, screenshots, and contribution framing.
- Keep the research page's track/publication structure, which already presents questions, methods, contributions, outcomes, and DOI links clearly.
- Keep Markdown rendering with sanitization in the chat; that part is directionally right.
