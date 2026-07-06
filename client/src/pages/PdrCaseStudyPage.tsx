import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import launchstackLogo from '../assets/launchstack-logo.png'

type CaseStudyImage = {
  src: string
  alt: string
  label: string
  caption: string
  interpretation: string
}

const systemImage: CaseStudyImage = {
  src: '/screenshots/pdr-proof-1-diff.app.jpeg',
  alt: 'LaunchStack section-level original and proposed rewrite diff',
  label: 'System evidence',
  caption: 'Diff-first rewrite review keeps generated edits inspectable before approval.',
  interpretation:
    'LaunchStack exposes the original section, proposed rewrite, change rationale, and accept/reject decision in one review surface.',
}

const evidenceImages: CaseStudyImage[] = [
  {
    src: '/screenshots/pdr-proof-2-results.app.jpeg',
    alt: 'LaunchStack research-to-campaign process with claim-source verification',
    label: 'Grounding evidence',
    caption: 'The campaign workflow shows its research steps before a draft moves forward.',
    interpretation:
      'Company context, competitor analysis, trend research, campaign history, and claim checks remain visible instead of disappearing behind a generated post.',
  },
  {
    src: '/screenshots/pdr-proof-1-editor.app.jpeg',
    alt: 'LaunchStack editor containing an accepted rewrite',
    label: 'Approval evidence',
    caption: 'Approved text moves into an editor where the user still controls the document.',
    interpretation:
      'The AI workflow ends with reviewable writing state, not an automatic overwrite of the source document.',
  },
]

const lightboxImages = [systemImage, ...evidenceImages]

const mechanisms = [
  {
    title: 'Inspectable sources',
    body:
      'Generated answers and campaign drafts are framed around visible source context, research steps, and claim checks.',
  },
  {
    title: 'Reviewable transformations',
    body:
      'Rewrite suggestions are shown as section-level diffs so users can inspect the exact change before accepting it.',
  },
  {
    title: 'Human approval',
    body:
      'Content only moves forward after explicit accept, reject, edit, or export actions by the user.',
  },
]

const reliabilityPoints = [
  'Diff review makes edits auditable before they enter the document.',
  'Source references and visible process keep generated work tied to company context.',
  'The DOCX redlining path has a public commit showing authenticated API validation, request handling, export behavior, and automated test coverage.',
]

const contributionPoints = [
  'Built human-in-the-loop document workflows for configuring, previewing, regenerating, and accepting AI-generated rewrites.',
  'Developed the research-to-campaign flow that surfaces platform context, trend research, claim checks, and draft handoff.',
  'Integrated the legal editor with the Adeu DOCX redlining service so approved edits can export as native Track Changes.',
]

const lessons = [
  'Generation is easier than reviewable generation.',
  'Source grounding only matters when reviewers can inspect it.',
  'Rewrite workflows need visible diffs, not hidden transformations.',
  'Human approval should be part of the system boundary, not an afterthought.',
]

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-cyan-200/75">
      {children}
    </p>
  )
}

function TextLink({
  href,
  children,
  external = false,
}: {
  href: string
  children: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="inline-flex rounded-full border border-cyan-200/25 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100/70 hover:bg-cyan-200/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
    >
      {children}
    </a>
  )
}

function ScreenshotFigure({
  image,
  onOpen,
  priority = false,
}: {
  image: CaseStudyImage
  onOpen: () => void
  priority?: boolean
}) {
  return (
    <figure className="group flex h-full flex-col">
      <button
        type="button"
        onClick={onOpen}
        className={`block w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/45 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 ${
          priority ? '' : 'flex aspect-[16/13] items-center justify-center'
        }`}
        aria-label={`Enlarge ${image.caption}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className={
            priority
              ? 'block h-auto w-full object-contain'
              : 'block max-h-full max-w-full object-contain'
          }
        />
      </button>
      <figcaption className="mt-5 flex flex-1 flex-col space-y-2">
        <SectionLabel>{image.label}</SectionLabel>
        <p className="text-xl font-semibold leading-snug text-slate-50">
          {image.caption}
        </p>
        <p className="max-w-3xl text-base leading-relaxed text-slate-400">
          {image.interpretation}
        </p>
      </figcaption>
    </figure>
  )
}

function Lightbox({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number | null
  setActiveIndex: (index: number | null) => void
}) {
  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((activeIndex + 1) % lightboxImages.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex(
          activeIndex === 0 ? lightboxImages.length - 1 : activeIndex - 1,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, setActiveIndex])

  if (activeIndex === null) return null

  const image = lightboxImages[activeIndex]
  const showPrevious = () => {
    setActiveIndex(activeIndex === 0 ? lightboxImages.length - 1 : activeIndex - 1)
  }
  const showNext = () => {
    setActiveIndex((activeIndex + 1) % lightboxImages.length)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/92 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
    >
      <button
        type="button"
        onClick={() => setActiveIndex(null)}
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-900/85 text-white transition hover:border-cyan-200/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
        aria-label="Close screenshot"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={showPrevious}
        className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-900/85 text-white transition hover:border-cyan-200/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 md:inline-flex"
        aria-label="Previous screenshot"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <div className="max-h-[86vh] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 shadow-2xl">
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[76vh] w-full object-contain"
        />
        <div className="border-t border-white/10 p-4 md:p-5">
          <p className="text-sm font-semibold text-white">{image.caption}</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">
            {image.interpretation}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={showNext}
        className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-900/85 text-white transition hover:border-cyan-200/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 md:inline-flex"
        aria-label="Next screenshot"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}

export function PdrCaseStudyPage() {
  const [activeImage, setActiveImage] = useState<number | null>(null)

  return (
    <div className="mx-auto max-w-7xl space-y-24 px-4 pb-24 pt-4 sm:px-6 lg:px-8">
      <section className="pt-10 md:pt-16">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 transition hover:text-cyan-100"
        >
          <span aria-hidden="true">&lt;</span>
          Back to Homepage
        </a>

        <div className="mt-14 max-w-[1180px]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <img
              src={launchstackLogo}
              alt="LaunchStack"
              className="h-14 w-auto md:h-16"
            />
            <SectionLabel>Technical Case Study</SectionLabel>
          </div>
          <p className="mt-10 text-lg font-semibold text-cyan-100/85 md:text-xl">
            LaunchStack
          </p>
          <h1 className="mt-4 max-w-[1180px] text-balance text-[clamp(2.85rem,5.15vw,5.35rem)] font-semibold leading-[1.03] tracking-tight text-slate-50">
            Source-grounded AI drafting through inspectable human approval.
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
            LaunchStack turns scattered founder knowledge into cited answers,
            reviewable rewrites, and campaign drafts that preserve source context,
            visible process, and explicit user approval.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <TextLink href="#system">Case Study</TextLink>
            <TextLink href="https://launch-stack-web.vercel.app/" external>
              Demo
            </TextLink>
            <TextLink href="https://github.com/JunzheShi0702/LaunchStack" external>
              GitHub
            </TextLink>
            <TextLink
              href="https://github.com/JunzheShi0702/LaunchStack/commit/ce08f6e"
              external
            >
              Commit Proof
            </TextLink>
          </div>
        </div>
      </section>

      <section className="max-w-4xl">
        <SectionLabel>Problem</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Drafting is not the same as generation.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          Founder knowledge often lives across documents, calls, messages, and
          repositories. A drafting system can produce text quickly, but useful
          professional workflows also need provenance, visible transformation, and a
          person who decides what becomes final.
        </p>
      </section>

      <section id="system" className="scroll-mt-28 space-y-10">
        <div className="max-w-4xl">
          <SectionLabel>System</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            LaunchStack turns AI output into reviewable writing state.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            The rewrite interface is the main system surface: users choose a source
            section, set boundaries, inspect the proposed diff, and approve only the
            changes they want to carry forward.
          </p>
        </div>
        <ScreenshotFigure
          image={systemImage}
          onOpen={() => setActiveImage(0)}
          priority
        />
      </section>

      <section className="grid gap-10 border-y border-white/10 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Trust mechanisms</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            What makes the workflow inspectable?
          </h2>
        </div>
        <div className="space-y-8">
          {mechanisms.map((mechanism) => (
            <div key={mechanism.title}>
              <h3 className="text-xl font-semibold text-slate-50">
                {mechanism.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-400">
                {mechanism.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="evidence" data-jump-highlight="frame" className="scroll-mt-28 space-y-10">
        <div className="max-w-4xl">
          <SectionLabel>Evidence</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            The proof is visible process, not hidden automation.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Two supporting views show the same principle outside the main diff screen:
            generated work should remain traceable before it becomes user-facing work.
          </p>
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {evidenceImages.map((image, index) => (
            <ScreenshotFigure
              key={image.src}
              image={image}
              onOpen={() => setActiveImage(index + 1)}
            />
          ))}
        </div>
      </section>

      <section id="technical-notes" className="scroll-mt-28 border-y border-white/10 py-14">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Reliability</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              AI output is treated as a draft that must survive review.
            </h2>
          </div>
          <div className="space-y-5">
            {reliabilityPoints.map((point) => (
              <p key={point} className="text-lg leading-relaxed text-slate-300">
                {point}
              </p>
            ))}
            <a
              href="https://github.com/JunzheShi0702/LaunchStack/commit/ce08f6e"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm font-semibold text-cyan-100 underline decoration-cyan-200/40 underline-offset-4 transition hover:text-white hover:decoration-cyan-100"
            >
              Inspect the public DOCX redlining commit
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-12 pt-4 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        <div>
          <SectionLabel>My Role</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Product and full-stack engineering across review surfaces.
          </h2>
          <div className="mt-8 space-y-5">
            {contributionPoints.map((point) => (
              <p key={point} className="text-lg leading-relaxed text-slate-300">
                {point}
              </p>
            ))}
          </div>
        </div>

        <div id="lessons" className="scroll-mt-28">
          <SectionLabel>Lessons</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            What the case study clarified.
          </h2>
          <ol className="mt-8 space-y-6">
            {lessons.map((lesson, index) => (
              <li key={lesson} className="grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="font-mono text-sm font-semibold text-cyan-200/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-lg leading-relaxed text-slate-300">{lesson}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Lightbox activeIndex={activeImage} setActiveIndex={setActiveImage} />
    </div>
  )
}
