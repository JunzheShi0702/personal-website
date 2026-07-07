import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import launchstackLogo from '../assets/launchstack-logo.png'

type CaseStudyMedia = {
  src: string
  alt: string
  label: string
  caption: string
  interpretation: string
  mediaType: 'video'
}

const systemMedia: CaseStudyMedia = {
  src: '/demos/launchstack/legal-track-changes-handoff.mp4',
  alt: 'LaunchStack legal review handoff demo showing validation, Send for review, Track Changes processing, and tracked DOCX download',
  label: 'System evidence',
  caption: 'Legal review handoff turns validated edits into a tracked DOCX response.',
  interpretation:
    'Junzhe contributed the apply-edits request flow, tracked DOCX response handling, and download path for the legal review handoff.',
  mediaType: 'video',
}

const evidenceMedia: CaseStudyMedia[] = [
  {
    src: '/demos/launchstack/bluesky-api-first-trend-research.mp4',
    alt: 'LaunchStack Bluesky marketing pipeline demo showing platform selection, API-first trend research, and campaign draft rendering',
    label: 'Grounding evidence',
    caption: 'Bluesky trend research demonstrates the API-first platform path.',
    interpretation:
      'Junzhe built the platform-specific API-first clients for Reddit, X, LinkedIn, and Bluesky; this demo shows the Bluesky path feeding a campaign draft.',
    mediaType: 'video',
  },
  {
    src: '/demos/launchstack/rewrite-workflow-handoff.mp4',
    alt: 'LaunchStack rewrite workflow demo showing pasted source text, rewrite workflow completion, accepted output, and a Rewritten Text editor document',
    label: 'Approval evidence',
    caption: 'Rewrite output becomes editable document state after acceptance.',
    interpretation:
      'Junzhe contributed the workflow-to-editor handoff where completed rewrite output becomes a temporary Rewritten Text editor document.',
    mediaType: 'video',
  },
]

const lightboxMedia = [systemMedia, ...evidenceMedia]

const mechanisms = [
  {
    title: 'Inspectable sources',
    body:
      'The reference app keeps source context, research steps, and claim checks visible around generated work instead of treating the model answer as the artifact.',
  },
  {
    title: 'Reviewable transformations',
    body:
      'Rewrite output stays separate from document mutation until a user accepts the handoff into editor state.',
  },
  {
    title: 'Human approval',
    body:
      'Legal review, rewrite, and campaign workflows depend on explicit handoff points rather than silent overwrites.',
  },
]

const reliabilityPoints = [
  'LaunchStack separates generated output from mutation boundaries: preview, accept, export, and download are distinct product states.',
  'The README describes a ports-based TypeScript engine where the host owns routing, auth, env, storage, jobs, and retrieval wiring.',
  'The DOCX redlining path has public commit evidence for authenticated API validation, request handling, export behavior, and automated test coverage.',
]

const contributionPoints = [
  'Contributed the rewrite workflow handoff where completed AI output becomes a temporary Rewritten Text editor document.',
  'Built platform-specific API-first clients for Reddit, X, LinkedIn, and Bluesky; the current portfolio demo shows the Bluesky path.',
  'Contributed the legal review handoff after validation: apply-edits request flow, tracked DOCX response handling, and download path.',
]

const lessons = [
  {
    title: 'AI output is only useful when it crosses a workflow boundary.',
    body:
      'A rewrite trapped inside an AI workflow is still temporary output. The implementation lesson is that handoff into editable document state is part of the system, not a final UI detail.',
  },
  {
    title: 'Human review needs an artifact, not just an approval button.',
    body:
      'For legal and document workflows, review often has to leave the application. Track Changes made the legal review handoff portable and inspectable without claiming ownership of the full legal template system.',
  },
  {
    title: 'External APIs should fail without collapsing the workflow.',
    body:
      'Building API-first clients for Reddit, X, LinkedIn, and Bluesky showed that platform access can be inconsistent. The provider boundary and fallback path matter because a campaign workflow should keep its state even when one research path fails.',
  },
  {
    title: 'Code ownership and runtime behavior can diverge over time.',
    body:
      'A feature can remain in Git history while the current runtime moves to a different execution path. The Marketing Pipeline work taught me to trace the UI action to the provider call instead of trusting filenames, comments, or assumptions.',
  },
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

function InlineDemoVideo({
  src,
  ariaLabel,
  className,
}: {
  src: string
  ariaLabel: string
  className: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    video.muted = true
    video.defaultMuted = true

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const playIfAllowed = () => {
      if (motionQuery.matches) {
        video.pause()
        return
      }

      void video.play().catch(() => {
        // Browsers may defer playback until visibility or tab focus changes.
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          playIfAllowed()
          return
        }

        video.pause()
      },
      { threshold: [0, 0.25, 0.55, 0.8, 1] },
    )

    const handleMotionChange = () => {
      if (motionQuery.matches) {
        video.pause()
      } else {
        const rect = video.getBoundingClientRect()
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight
        const visibleHeight =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)

        if (visibleHeight / rect.height >= 0.55) {
          playIfAllowed()
        }
      }
    }

    observer.observe(video)
    motionQuery.addEventListener('change', handleMotionChange)

    return () => {
      observer.disconnect()
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      src={src}
      aria-label={ariaLabel}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
    />
  )
}

function DemoFigure({
  media,
  onOpen,
}: {
  media: CaseStudyMedia
  onOpen: () => void
}) {
  return (
    <figure className="group flex h-full flex-col">
      <button
        type="button"
        onClick={onOpen}
        className="block w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/45 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
        aria-label={`Enlarge ${media.caption}`}
      >
        <InlineDemoVideo
          src={media.src}
          ariaLabel={media.alt}
          className="block h-auto w-full object-contain"
        />
      </button>
      <figcaption className="mt-5 flex flex-1 flex-col space-y-2">
        <SectionLabel>{media.label}</SectionLabel>
        <p className="text-xl font-semibold leading-snug text-slate-50">
          {media.caption}
        </p>
        <p className="max-w-3xl text-base leading-relaxed text-slate-400">
          {media.interpretation}
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
        setActiveIndex((activeIndex + 1) % lightboxMedia.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex(
          activeIndex === 0 ? lightboxMedia.length - 1 : activeIndex - 1,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, setActiveIndex])

  if (activeIndex === null) return null

  const media = lightboxMedia[activeIndex]
  const showPrevious = () => {
    setActiveIndex(activeIndex === 0 ? lightboxMedia.length - 1 : activeIndex - 1)
  }
  const showNext = () => {
    setActiveIndex((activeIndex + 1) % lightboxMedia.length)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/92 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={media.caption}
    >
      <button
        type="button"
        onClick={() => setActiveIndex(null)}
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-900/85 text-white transition hover:border-cyan-200/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
        aria-label="Close demo video"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={showPrevious}
        className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-900/85 text-white transition hover:border-cyan-200/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 md:inline-flex"
        aria-label="Previous demo video"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <div className="max-h-[86vh] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 shadow-2xl">
        <InlineDemoVideo
          src={media.src}
          ariaLabel={media.alt}
          className="max-h-[76vh] w-full object-contain"
        />
        <div className="border-t border-white/10 p-4 md:p-5">
          <p className="text-sm font-semibold text-white">{media.caption}</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">
            {media.interpretation}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={showNext}
        className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-900/85 text-white transition hover:border-cyan-200/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 md:inline-flex"
        aria-label="Next demo video"
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
              className="h-14 w-auto rounded-xl md:h-16"
            />
            <SectionLabel>Technical Case Study</SectionLabel>
          </div>
          <p className="mt-10 text-lg font-semibold text-cyan-100/85 md:text-xl">
            LaunchStack
          </p>
          <h1 className="mt-4 max-w-[1180px] text-balance text-[clamp(2.85rem,5.15vw,5.35rem)] font-semibold leading-[1.03] tracking-tight text-slate-50">
            Source-aware AI workflows through inspectable human approval.
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
            LaunchStack is a TypeScript engine and reference app for AI-native
            workflows: document review, retrieval context, marketing research, and
            handoff points where generated work becomes something a person can inspect.
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
            LaunchStack turns generated edits into reviewable handoff artifacts.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            The legal review path shows the system boundary clearly: validated edits
            become an apply-edits request, the tracked DOCX response is handled, and
            the result leaves the app as a portable review artifact.
          </p>
        </div>
        <DemoFigure
          media={systemMedia}
          onOpen={() => setActiveImage(0)}
        />
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
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
            Two supporting views show the same principle in other workflows: platform
            research and rewrite output both need explicit handoff points before they
            become user-facing work.
          </p>
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {evidenceMedia.map((media, index) => (
            <DemoFigure
              key={media.src}
              media={media}
              onOpen={() => setActiveImage(index + 1)}
            />
          ))}
        </div>
      </section>

      <section id="technical-notes" className="scroll-mt-28">
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

      <section className="pt-4">
        <div className="max-w-4xl">
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
      </section>

      <section id="lessons" className="scroll-mt-28 pb-4">
        <div className="max-w-4xl">
          <SectionLabel>Lessons</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            What I learned building LaunchStack
          </h2>
        </div>

        <ol className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {lessons.map((lesson, index) => (
            <li key={lesson.title}>
              <span className="font-mono text-sm font-semibold text-cyan-200/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-50">
                {lesson.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-400">
                {lesson.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <Lightbox activeIndex={activeImage} setActiveIndex={setActiveImage} />
    </div>
  )
}
