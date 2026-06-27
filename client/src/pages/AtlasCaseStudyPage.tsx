import { ScreenshotCard } from '../components/ui/ScreenshotCard'
import atlasLogo from '../assets/atlas-logo.png'

const workflow = [
  'Google OAuth and onboarding capture graduation context, goals, workload tolerance, and preferences.',
  'Unified course discovery combines SIS constraints, semantic retrieval, and exact matching into one ranked flow.',
  'Users create schedules, switch list/calendar views, and modify plans through natural-language add/drop/swap commands.',
  'Schedule audit runs workload, conflict, and goal-alignment analysis with evidence-backed findings.',
  'Chat continues with persistent context and memory-aware recommendations rather than one-off responses.',
]

const architectureBlocks = [
  {
    title: 'Frontend Product Layer',
    points: [
      'React + TypeScript dashboard for search, shortlist-to-schedule flow, chat, and audit surfaces.',
      'Weekly calendar + custom-event controls with explicit conflict visibility and edit operations.',
      'Attribution-first UX: summary views expose raw evaluation data for inspectable AI output.',
    ],
  },
  {
    title: 'Application Services Layer',
    points: [
      'Node.js / Express APIs for auth, profile onboarding, schedules, audits, and `/api/agent` orchestration.',
      'Contract-focused response normalization with guardrails for search, summary, details, and text payloads.',
      'AI eval suite (14 golden cases) in CI protects user-visible behavior from prompt/tool regressions.',
    ],
  },
  {
    title: 'Data + Retrieval Layer',
    points: [
      'PostgreSQL stores users, profiles, schedules, audits, chat state, and memory records.',
      'pgvector-backed SIS course embeddings support semantic retrieval over JHU catalog content.',
      'EvaluationKit-derived metrics are refreshed via scraper pipeline and used for grounded summaries/audits.',
    ],
  },
]

const atAGlance = [
  {
    label: 'Problem',
    value:
      'Students need one inspectable workflow for course discovery, schedule editing, and advising tradeoffs.',
  },
  {
    label: 'Stack',
    value: 'React, TypeScript, Node.js, Express, PostgreSQL, pgvector, SIS data.',
  },
  {
    label: 'My role',
    value:
      'Weekly calendar, event contracts, evaluation transparency, and schedule-aware agent behavior.',
  },
  {
    label: 'Evaluation',
    value:
      'Raw evaluation rows, schedule audit surfaces, and 14 golden `/api/agent` cases in CI.',
  },
  {
    label: 'Research significance',
    value:
      'A decision-support AI system focused on grounding, constraints, reliability, and user trust.',
  },
]

const mindMapBranches = [
  {
    title: 'Input Layer',
    nodes: ['Google OAuth + onboarding', 'Goals / workload / preferences', 'Schedule-specific chat context'],
  },
  {
    title: 'Search + Retrieval',
    nodes: ['Unified search flow', 'SIS constraints + exact matching', 'pgvector semantic retrieval'],
  },
  {
    title: 'Planning Actions',
    nodes: ['Natural-language add/drop/swap', 'Calendar + custom event edits', 'Conflict-aware schedule state'],
  },
  {
    title: 'Audit + Explainability',
    nodes: ['Workload + goal alignment', 'Raw eval data attribution', 'Contract-tested agent responses'],
  },
]

export function AtlasCaseStudyPage() {
  return (
    <div className="space-y-8">
      <section className="relative p-6 md:p-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 transition hover:text-cyan-100"
        >
          <span aria-hidden="true">&lt;</span>
          Back to Homepage
        </a>
        <div className="mt-7">
          <div className="space-y-4 md:space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80 md:text-base">
              Flagship Case Study
            </p>
            <div className="inline-flex w-fit items-center rounded-2xl border border-white/85 bg-white px-5 py-3 shadow-[0_14px_30px_rgba(2,6,23,0.35)]">
              <img
                src={atlasLogo}
                alt="Atlas"
                className="h-14 w-auto md:h-20"
              />
            </div>
            <p className="text-balance text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">
              AI-assisted academic planning platform
            </p>
            <p className="max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Atlas unifies SIS search, schedule planning, and evidence-backed AI advising so JHU students can make course decisions with transparent tradeoffs.
            </p>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href="https://team-02-frontend.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
          >
            View Deployed Website
          </a>
          <a
            href="/ppt/AI%20Enabled%20SWE%20Final%20Presentation.pptx"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-cyan-100/90 transition hover:text-cyan-50"
          >
            Download Presentation
          </a>
          <a
            href="/projects/pdr-ai"
            className="text-sm font-semibold text-cyan-100/90 transition hover:text-cyan-50"
          >
            Explore PDR AI case study
          </a>
        </div>
      </section>

      <section className="rounded-3xl border border-white/15 bg-slate-950/80 p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/75">
          At a Glance
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-5">
          {atAGlance.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                {item.label}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/15 bg-slate-900/75 p-5">
          <h3 className="text-xl font-semibold text-white">Problem and motivation</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Atlas reduces scattered planning data into one actionable workflow: search,
            schedule edits, audit, and explainable AI guidance in the same surface.
          </p>
          <h4 className="mt-5 text-lg font-semibold text-slate-100">Design decisions</h4>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>
              Treat transparency as a product requirement: AI summaries must expose
              underlying evaluation rows and attribution context.
            </li>
            <li>
              Keep mutations safe with explicit contracts and clarification gating for
              ambiguous add/drop/swap requests.
            </li>
            <li>
              Separate retrieval, audit, and generation responsibilities so each layer
              is testable and regressions are easier to isolate.
            </li>
          </ul>
          <h4 className="mt-5 text-lg font-semibold text-slate-100">Limitations and lessons</h4>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Recommendation quality depends on SIS metadata quality and refresh cadence.</li>
            <li>
              Evaluation scraping is sensitive to upstream UI changes and needs discover/debug tooling.
            </li>
            <li>
              Contract tests on `/api/agent` dramatically reduce silent UX regressions
              when prompt or normalization logic changes.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
            My role
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            I led weekly calendar and event-contract implementation, built
            evaluation transparency surfaces (including raw-data attribution), and
            contributed to agent tooling and audit quality work such as metrics
            querying, schedule-aware reasoning, and contract-aligned API behavior.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-white">End-to-end workflow</h3>
        <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
          {workflow.map((step, i) => (
            <div key={step} className="flex items-center gap-2 md:flex-1">
              <div className="flex flex-1 flex-col gap-1 rounded-2xl border border-white/15 bg-slate-900/75 p-4">
                <span className="text-xs font-semibold text-cyan-300/70">0{i + 1}</span>
                <p className="text-sm leading-snug text-slate-200">{step}</p>
              </div>
              {i < workflow.length - 1 && (
                <span className="hidden text-slate-500 md:block" aria-hidden="true">›</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Atlas AI mind map</h3>
        <div className="rounded-3xl border border-white/15 bg-slate-900/75 p-5 md:p-6">
          <div className="mx-auto w-fit rounded-full border border-cyan-200/40 bg-cyan-300/15 px-5 py-2 text-sm font-semibold tracking-[0.08em] text-cyan-100">
            ATLAS AI DELIVERY TREE
          </div>
          <div className="mx-auto mt-3 h-5 w-px bg-cyan-200/40" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mindMapBranches.map((branch) => (
              <article
                key={branch.title}
                className="rounded-2xl border border-white/15 bg-slate-950/45 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                  {branch.title}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {branch.nodes.map((node) => (
                    <li key={node} className="rounded-lg border border-white/10 bg-slate-900/65 px-3 py-2">
                      {node}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="space-y-4 scroll-mt-28">
        <h3 className="text-xl font-semibold text-white">System architecture</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {architectureBlocks.map((block) => (
            <article
              key={block.title}
              className="rounded-2xl border border-white/15 bg-slate-900/75 p-5"
            >
              <h4 className="text-base font-semibold text-cyan-100">{block.title}</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {block.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="evidence" className="space-y-4 scroll-mt-28">
        <div>
          <h3 className="text-xl font-semibold text-white">My engineering contributions</h3>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            These screenshots show the user-facing features I implemented across
            natural-language schedule operations, evaluation transparency, and
            conflict-aware planning.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/15 bg-slate-900/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
              Contribution 01 · Schedule operations
            </p>
            <p className="mt-2 text-sm text-slate-300">
              The assistant executes add and remove requests in chat and applies
              state changes directly to the weekly schedule.
            </p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-slate-900/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
              Contribution 02 · Evaluation transparency
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Source-level evaluation rows are inspectable through raw data,
              preserving metric provenance instead of opaque summaries.
            </p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-slate-900/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
              Contribution 03 · Conflict-aware planning
            </p>
            <p className="mt-2 text-sm text-slate-300">
              The weekly view shows the amber overlap warning with a conflict
              course block and a conflict custom event in the same time window.
            </p>
          </article>
        </div>
        <div className="rounded-2xl border border-dashed border-cyan-200/25 bg-cyan-300/5 p-4 text-sm text-slate-300">
          Future asset TODO: add a short silent clip showing natural-language
          schedule edits and the resulting calendar state change. No GIF/video
          asset currently exists in this repo.
        </div>
        <div className="group space-y-4">
          <ScreenshotCard
            src="/screenshots/atlas-proof-4-schedule-audit.jpeg"
            alt="Atlas chat showing add and remove operations"
            caption="Contribution 01 · Schedule operations: add and remove commands are executed through chat and reflected in schedule state."
            badge="01"
            imageClassName="block h-auto w-full bg-slate-950 object-contain"
            figureClassName="overflow-hidden rounded-2xl border border-white/20 bg-slate-950/70 shadow-[0_18px_60px_-28px_rgba(34,211,238,0.35)]"
            captionClassName="border-t border-white/10 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-200"
          />
          <div className="space-y-4">
            <ScreenshotCard
              src="/screenshots/atlas-proof-3-eval-raw-data.png"
              alt="Atlas raw evaluation data table"
              caption="Contribution 02 · Evaluation transparency: raw metric rows, term, instructor, and respondent counts remain visible for auditability."
              badge="02"
              imageClassName="block h-auto w-full bg-slate-950 object-contain"
              figureClassName="overflow-hidden rounded-2xl border border-white/20 bg-slate-950/70 shadow-[0_14px_48px_-26px_rgba(15,23,42,0.95)]"
              captionClassName="border-t border-white/10 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-200"
            />
          </div>
          <ScreenshotCard
            src="/screenshots/atlas-proof-1-weekly-calendar.jpeg"
            alt="Atlas conflict proof with overlapping course and custom event"
            caption="Contribution 03 · Conflict-aware planning: the weekly calendar identifies overlapping courses and custom events in the same time window."
            badge="03"
            imageClassName="block h-auto w-full bg-slate-950 object-contain"
            figureClassName="overflow-hidden rounded-2xl border border-white/20 bg-slate-950/70 shadow-[0_18px_60px_-28px_rgba(34,211,238,0.35)]"
            captionClassName="border-t border-white/10 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-200"
          />
        </div>
      </section>
    </div>
  )
}
