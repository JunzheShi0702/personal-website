import { ScreenshotCard } from '../components/ui/ScreenshotCard'
import launchstackLogo from '../assets/launchstack-logo.png'

const architectureLayers = [
  {
    title: 'Services Layer',
    items: ['Marketing Engine', 'Legal Services', 'Employee Onboarding', 'Document Reasoning'],
  },
  {
    title: 'Tools Layer',
    items: ['RAG Pipeline (BM25 + Vector)', 'Web Search', 'Doc Ingestion & OCR', 'Entity Extraction & Knowledge Graph'],
  },
  {
    title: 'Physical Layer',
    items: ['PostgreSQL + pgvector', 'Next.js 15 + Inngest', 'S3 Storage', 'External ML Sidecars'],
  },
]

const workflowSteps = [
  { step: '01', label: 'Upload', description: 'Cloud or database storage with role-based access' },
  { step: '02', label: 'Ingest', description: 'Unified adapters for PDF, DOCX, images, and more' },
  { step: '03', label: 'Process', description: 'OCR, chunking, embedding, and entity extraction' },
  { step: '04', label: 'Store', description: 'Vectors in pgvector, chunks for BM25, knowledge graph' },
  { step: '05', label: 'Retrieve', description: 'Ensemble search with vector, BM25, and reranking' },
  { step: '06', label: 'Use', description: 'AI chat, predictive analysis, document insights' },
]

export function PdrCaseStudyPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl p-6 md:p-8">
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
              Modular AI engine for Next.js apps
            </p>
            <p className="max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Launchstack combines document ingestion, semantic search, knowledge graphs, and LLM abstractions into a framework-agnostic engine — wired into the Next.js app you already have.
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
          <h3 className="text-xl font-semibold text-white">Why Launchstack</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Document AI is fragmented: ingestion is separate from retrieval, which is separate from LLM
            orchestration. Launchstack unifies the stack into a single, portable TypeScript engine that
            reads zero environment variables at runtime — you supply the config.
          </p>
          <h4 className="mt-5 text-lg font-semibold text-slate-100">Core capabilities</h4>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-300">
            <li>Unified ingestion for 10+ document types</li>
            <li>RAG with vector search, BM25, and optional reranking</li>
            <li>Knowledge graph entity extraction and traversal</li>
            <li>Background jobs and agent guardrails</li>
            <li>Multi-tenant document scoping and RBAC</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-white/15 bg-slate-900/75 p-5">
          <h3 className="text-xl font-semibold text-white">Three-layer design</h3>
          <div className="mt-3 space-y-3">
            {architectureLayers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-xl border border-white/10 bg-slate-950/55 p-3"
              >
                <h4 className="text-sm font-semibold text-cyan-100">{layer.title}</h4>
                <p className="mt-1 text-xs text-slate-400">{layer.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-white/15 bg-slate-900/75 p-5">
        <h3 className="text-xl font-semibold text-white">End-to-end workflow</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {workflowSteps.map((item) => (
            <div key={item.step} className="rounded-lg border border-white/10 bg-slate-950/55 p-3 text-center">
              <p className="text-lg font-bold text-cyan-300">{item.step}</p>
              <p className="mt-1 text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-xs leading-tight text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="group grid gap-4 lg:grid-cols-2">
        <ScreenshotCard
          src="/screenshots/pdr-live-hero.png"
          alt="Launchstack platform overview"
          caption="Document management interface with multi-tenant role-based access, upload workflows, and document analytics."
        />
        <ScreenshotCard
          src="/screenshots/pdr-live-features.png"
          alt="Launchstack feature modules"
          caption="RAG-powered search, predictive document analysis, knowledge graph visualization, and AI chat on grounded data."
        />
      </section>
    </div>
  )
}
