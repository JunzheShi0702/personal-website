import { ScreenshotCard } from '../components/ui/ScreenshotCard'
import launchstackLogo from '../assets/launchstack-logo.png'

const stages = [
  {
    title: 'Import and context setup',
    detail:
      'Users upload source documents, define revision goals, and set transformation constraints before generation begins.',
  },
  {
    title: 'Draft generation with control',
    detail:
      'AI proposes revised drafts while preserving user visibility into instruction scope and transformation intent.',
  },
  {
    title: 'Preview and diff review',
    detail:
      'Users inspect granular changes in a review layer instead of accepting a single opaque rewritten result.',
  },
  {
    title: 'Regeneration and selective acceptance',
    detail:
      'Sections can be regenerated or accepted stepwise; accepted edits persist in rewrite state across sessions.',
  },
  {
    title: 'DOCX handling and output',
    detail:
      'Revision output supports document workflows including Track Changes style review and final export pathways.',
  },
]

export function PdrCaseStudyPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/15 bg-slate-900/80 p-6 md:p-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 transition hover:text-cyan-100"
        >
          <span aria-hidden="true">&lt;</span>
          Back to Homepage
        </a>
        <div className="mt-5">
          <div className="space-y-5 md:space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80 md:text-base">
              Flagship Case Study
            </p>
            <div className="inline-flex w-fit items-center overflow-hidden rounded-2xl">
              <img
                src={launchstackLogo}
                alt="LaunchStack"
                className="h-16 w-auto md:h-24"
              />
            </div>
            <p className="text-balance text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">
              Human-AI document revision platform
            </p>
            <p className="max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
              A collaborative rewriting platform designed around reviewability, user control, and iterative quality rather than one-shot generation.
            </p>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href="https://www.pdrai.online/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
          >
            View Deployed Website
          </a>
          <a
            href="https://github.com/Deodat-Lawson/LaunchStack"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-cyan-100/90 transition hover:text-cyan-50"
          >
            View Repository
          </a>
          <a
            href="/projects/atlas"
            className="text-sm font-semibold text-cyan-100/90 transition hover:text-cyan-50"
          >
            Explore Atlas Project
          </a>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-white/15 bg-slate-900/75 p-5">
          <h3 className="text-xl font-semibold text-white">Why this product exists</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            One-shot rewriting can create fast output but weak trust: users lose
            control over factual drift, tone mismatch, and legal or procedural nuance.
            PDR AI reframes revision as a guided collaboration loop where AI accelerates
            options and humans decide what survives.
          </p>
          <h4 className="mt-5 text-lg font-semibold text-slate-100">Core technical stack</h4>
          <p className="mt-2 text-sm text-slate-300">
            Next.js, TypeScript, API routes, persistence-backed rewrite state, diff
            rendering, and DOCX-focused revision operations integrated into editing
            workflows.
          </p>
        </article>
        <article className="rounded-2xl border border-white/15 bg-slate-900/75 p-5">
          <h3 className="text-xl font-semibold text-white">Workflow architecture</h3>
          <div className="mt-3 space-y-3">
            {stages.map((stage) => (
              <div
                key={stage.title}
                className="rounded-xl border border-white/10 bg-slate-950/55 p-3"
              >
                <h4 className="text-sm font-semibold text-cyan-100">{stage.title}</h4>
                <p className="mt-1 text-sm text-slate-300">{stage.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="group grid gap-4 lg:grid-cols-2">
        <ScreenshotCard
          src="/screenshots/pdr-live-hero.png"
          alt="PDR AI live landing page"
          caption="Live LaunchStack homepage highlighting document AI, team workflows, and deployment entry points."
        />
        <ScreenshotCard
          src="/screenshots/pdr-live-features.png"
          alt="PDR AI live feature sections"
          caption="Live product sections showing document RAG, employee management, and analytics capabilities."
        />
      </section>
    </div>
  )
}
