import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import launchstackLogo from '../assets/launchstack-logo.png'

const architectureLayers = [
  {
    title: 'Connected knowledge',
    items: ['Documents', 'Calls & recordings', 'Messages', 'Product repositories'],
  },
  {
    title: 'Shared intelligence',
    items: ['Semantic retrieval', 'Knowledge graph', 'Source-aware answers', 'Reusable context'],
  },
  {
    title: 'Founder workflows',
    items: ['Research', 'Document rewriting', 'Legal review', 'Marketing generation'],
  },
]

const atAGlance = [
  {
    label: 'Problem',
    value:
      'Founder knowledge is scattered across documents, calls, messages, and repositories.',
  },
  {
    label: 'Stack',
    value:
      'React, TypeScript, AI workflows, knowledge graph patterns, document automation.',
  },
  {
    label: 'My role',
    value:
      'Human-in-the-loop document workflows, research-to-campaign flow, and DOCX redlining integration.',
  },
  {
    label: 'Evaluation',
    value:
      'Diff review, source references, authenticated API validation, and 18 unit tests for the DOCX path.',
  },
  {
    label: 'Research significance',
    value:
      'A human-AI collaboration system focused on grounding, approval, provenance, and reusable context.',
  },
]

const workflowSteps = [
  { step: '01', label: 'Connect', description: 'Bring scattered founder knowledge into one workspace' },
  { step: '02', label: 'Understand', description: 'Parse content, relationships, and source context' },
  { step: '03', label: 'Index', description: 'Make meaning searchable across every connected source' },
  { step: '04', label: 'Ask', description: 'Query company knowledge in plain language' },
  { step: '05', label: 'Verify', description: 'Trace answers back to their supporting sources' },
  { step: '06', label: 'Apply', description: 'Reuse grounded context across product workflows' },
]

const controlledRewriteSlides = [
  {
    src: '/screenshots/pdr-proof-1-input.app.jpeg',
    alt: 'LaunchStack Rewrite workflow entry screen',
    title: 'Choose how to begin',
    description:
      'Start from an imported document, clipboard content, a blank editor, or a guided rewrite workflow.',
  },
  {
    src: '/screenshots/pdr-proof-1-options.app.jpeg',
    alt: 'LaunchStack rewrite scope, instructions, presets, and guardrails',
    title: 'Define the rewrite boundaries',
    description:
      'Select the source section, give a clear instruction, apply writing presets, and preserve structure, voice, and unresolved conflicts.',
  },
  {
    src: '/screenshots/pdr-proof-1-diff.app.jpeg',
    alt: 'LaunchStack section-level original and proposed rewrite diff',
    title: 'Review every proposed change',
    description:
      'A section-level diff highlights removals and additions, explains the transformation, and requires an explicit accept or reject decision.',
  },
  {
    src: '/screenshots/pdr-proof-1-editor.app.jpeg',
    alt: 'LaunchStack document editor containing an accepted rewrite',
    title: 'Continue with the approved version',
    description:
      'Accepted content moves into a full editor where users can format, extend, and save the result without losing editorial control.',
  },
]

const researchToCampaignSlides = [
  {
    src: '/screenshots/pdr-proof-2-platforms.app.jpeg',
    alt: 'LaunchStack Marketing Pipeline platform selection',
    title: 'Choose the right channel',
    description:
      'Select Reddit, X, LinkedIn, or Bluesky before shaping the campaign.',
  },
  {
    src: '/screenshots/pdr-proof-2-configs.app.jpeg',
    alt: 'LaunchStack Reddit campaign configuration',
    title: 'Define the campaign context',
    description:
      'Configure the destination, tone, audience, and content format around a specific campaign goal.',
  },
  {
    src: '/screenshots/pdr-proof-2-process.app.jpeg',
    alt: 'LaunchStack Marketing Pipeline research and generation process',
    title: 'Make the research process visible',
    description:
      'LaunchStack gathers company context, analyzes competitors and trends, and checks campaign history before drafting.',
  },
  {
    src: '/screenshots/pdr-proof-2-results.app.jpeg',
    alt: 'LaunchStack grounded Reddit campaign draft and trend references',
    title: 'Turn research into an editable draft',
    description:
      'Users receive a platform-ready draft, alternative strategies, claim checks, source references, and a direct handoff into AI refinement.',
  },
]

type ProofSlide = {
  src: string
  alt: string
  title: string
  description: string
}

type ProofCarouselProps = {
  eyebrow: string
  title: string
  summary: string
  slides: ProofSlide[]
  controlsLabel: string
}

function ProofCarousel({
  eyebrow,
  title,
  summary,
  slides,
  controlsLabel,
}: ProofCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const prefersReducedMotion = useReducedMotion()
  const slide = slides[activeSlide]

  const navigateTo = (nextSlide: number, nextDirection: number) => {
    setDirection(nextDirection)
    setActiveSlide(nextSlide)
  }

  const showPrevious = () => {
    navigateTo(
      activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
      -1,
    )
  }

  const showNext = () => {
    navigateTo((activeSlide + 1) % slides.length, 1)
  }

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeStrength = Math.abs(info.offset.x) + Math.abs(info.velocity.x) * 0.15
    if (swipeStrength < 90) return
    if (info.offset.x < 0) {
      showNext()
    } else {
      showPrevious()
    }
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-white/15 bg-slate-950/80">
      <div className="flex flex-col gap-4 border-b border-white/10 p-5 md:flex-row md:items-end md:justify-between md:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/80">
            {eyebrow}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            {title}
          </h3>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-slate-400">
          {summary}
        </p>
      </div>

      <div className="relative h-[28rem] overflow-hidden bg-slate-950 sm:h-[36rem] lg:h-[44rem]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={slide.src}
            custom={direction}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { x: direction > 0 ? '18%' : '-18%', opacity: 0 }
            }
            animate={{ x: 0, opacity: 1 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { x: direction > 0 ? '-18%' : '18%', opacity: 0 }
            }
            transition={{ duration: prefersReducedMotion ? 0.12 : 0.34, ease: 'easeOut' }}
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab overflow-y-auto overscroll-contain [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
            style={{ touchAction: 'pan-y' }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              draggable={false}
              className="block h-auto w-full select-none object-contain"
            />
          </motion.div>
        </AnimatePresence>
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Show previous rewrite proof"
          className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/85 text-white shadow-lg backdrop-blur transition hover:border-cyan-200/70 hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 md:left-5"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Show next rewrite proof"
          className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/85 text-white shadow-lg backdrop-blur transition hover:border-cyan-200/70 hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 md:right-5"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-col gap-4 border-t border-white/10 p-5 md:flex-row md:items-center md:justify-between md:p-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-cyan-200/75">
            Step {activeSlide + 1} of {slides.length}
          </p>
          <p className="mt-1 font-semibold text-white">{slide.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">
            {slide.description}
          </p>
        </div>
        <div className="flex items-center gap-2" aria-label={controlsLabel}>
          {slides.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => navigateTo(index, index >= activeSlide ? 1 : -1)}
              aria-label={`Show ${item.title}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              className={`h-2.5 rounded-full transition-all ${
                index === activeSlide
                  ? 'w-8 bg-cyan-300'
                  : 'w-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ControlledRewriteProof() {
  return (
    <ProofCarousel
      eyebrow="Contribution 01 · Diff-first rewrite"
      title="AI proposes. Users decide what moves forward."
      summary="Users define the scope and guardrails, inspect every change, and decide what enters the final document."
      slides={controlledRewriteSlides}
      controlsLabel="Rewrite proof slides"
    />
  )
}

function ResearchToCampaignProof() {
  return (
    <ProofCarousel
      eyebrow="Contribution 02 · Research-to-campaign pipeline"
      title="Research current conversations. Turn them into editable drafts."
      summary="LaunchStack grounds campaign drafts in platform-specific research, preserves working context, and carries selected content into refinement."
      slides={researchToCampaignSlides}
      controlsLabel="Marketing research proof slides"
    />
  )
}

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
              The open-source knowledge graph for founders
            </p>
            <p className="max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
              LaunchStack turns scattered documents, calls, messages, and product
              knowledge into one searchable graph—giving founders cited answers and
              reusable context across AI workflows.
            </p>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href="https://launch-stack-web.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
          >
            View Deployed Website
          </a>
          <a
            href="https://github.com/JunzheShi0702/LaunchStack"
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

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-white/15 bg-slate-900/75 p-5">
          <h3 className="text-xl font-semibold text-white">Why LaunchStack</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            A founder&apos;s most useful context is usually stranded across meeting notes,
            customer calls, product documents, inboxes, and repositories. LaunchStack
            connects those sources into a shared knowledge layer that can answer questions
            with citations and carry trusted context into everyday work.
          </p>
          <h4 className="mt-5 text-lg font-semibold text-slate-100">Core capabilities</h4>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-300">
            <li>Connect documents, messages, recordings, and repositories</li>
            <li>Build a shared knowledge graph with semantic retrieval</li>
            <li>Generate cited answers from trusted company context</li>
            <li>Carry grounded knowledge into document, legal, and marketing workflows</li>
            <li>Self-host with your own infrastructure and API keys</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-white/15 bg-slate-900/75 p-5">
          <h3 className="text-xl font-semibold text-white">From sources to action</h3>
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

      <section className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
          My role
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">
          Product and full-stack engineering
        </h3>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-200">
          I built human-in-the-loop document workflows that let users configure,
          preview, regenerate, and carry AI-generated drafts into a dedicated editor.
          I also developed multi-platform trend research with API-first fallback and
          integrated the legal editor with an Adeu service that exports approved edits
          as native DOCX Track Changes, backed by authenticated API validation and
          automated tests.
        </p>
      </section>

      <section id="architecture" className="scroll-mt-28 rounded-2xl border border-white/15 bg-slate-900/75 p-5">
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

      <section id="evidence" className="space-y-4 scroll-mt-28">
        <div className="rounded-2xl border border-dashed border-cyan-200/25 bg-cyan-300/5 p-4 text-sm text-slate-300">
          Future asset TODO: add a short silent clip showing the rewrite review
          or research-to-campaign interaction. No GIF/video asset currently
          exists in this repo.
        </div>
        <ControlledRewriteProof />
      </section>

      <ResearchToCampaignProof />

      <section id="technical-notes" className="scroll-mt-28 overflow-hidden rounded-3xl border border-white/15 bg-slate-950/80">
        <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-b border-white/10 bg-gradient-to-br from-violet-400/15 via-cyan-300/5 to-transparent p-6 lg:border-b-0 lg:border-r lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-200/80">
              Contribution 03 · Code-backed integration
            </p>
            <p className="mt-5 font-mono text-sm text-cyan-100/75">ce08f6e</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Adeu DOCX redlining integration
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              A code-backed contribution to the legal document workflow, even as
              the surrounding LaunchStack interface continues to evolve.
            </p>
            <a
              href="https://github.com/JunzheShi0702/LaunchStack/commit/ce08f6e"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full border border-violet-300/35 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:border-violet-200 hover:text-white"
            >
              Inspect the commit
            </a>
          </div>

          <div className="p-6 lg:p-8">
            <p className="max-w-3xl text-base leading-relaxed text-slate-200">
              I connected the legal document editor to the Adeu service so approved
              field updates could be exported as native DOCX Track Changes. The
              implementation covered the authenticated API boundary, request
              validation, edit batching, progress and error feedback, and download
              handling for the modified document.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ['Authenticated API', 'Clerk-protected endpoint with Zod request validation'],
                ['Native review output', 'Insertions and deletions preserved as DOCX Track Changes'],
                ['Resilient feedback', 'Multi-step progress states and actionable service errors'],
                ['18 unit tests', 'Auth, validation, integration, failures, and edge cases'],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                >
                  <p className="text-sm font-semibold text-cyan-100">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-slate-500">
              LaunchStack 2.0 has since evolved its legal drafting interface. This
              contribution documents the earlier Track Changes export path implemented
              within the legal editor.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
