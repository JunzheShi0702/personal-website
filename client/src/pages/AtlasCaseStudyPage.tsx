import { useEffect, useState } from 'react'
import atlasLogo from '../assets/atlas-logo.png'

const evidenceFigures = [
  {
    id: 'system',
    src: '/demos/atlas/atlas-planning-demo.mp4',
    mediaType: 'video',
    alt: 'Atlas planning demo showing constraint-aware course exploration, explicit add actions, and calendar updates',
    caption: 'Calendar planning state',
    interpretation:
      'The calendar is where selected courses and custom events become editable schedule state, not a transient chat answer.',
    expandImage: true,
    frameClassName: 'aspect-[2500/1738]',
  },
  {
    id: 'raw-evals',
    roleLabel: 'Source evidence',
    src: '/demos/atlas/atlas-evidence-demo.mp4',
    mediaType: 'video',
    alt: 'Atlas evidence demo showing an evaluation summary opening raw source rows',
    caption: 'Raw evaluation rows',
    interpretation:
      'Summary claims remain tied to metric names, terms, instructors, and respondent counts when backing rows exist.',
    proof:
      'Generated summaries remain auditable because the source values stay visible.',
    expandImage: true,
  },
  {
    id: 'agent-audit',
    roleLabel: 'Behavior evidence',
    src: '/demos/atlas/atlas-clarification-demo.mp4',
    mediaType: 'video',
    alt: 'Atlas clarification demo showing a missing weekday clarification and a Monday event added to the calendar',
    caption: 'Schedule-aware agent behavior',
    interpretation:
      'Schedule changes and audit responses use explicit added, removed, failed, and clarification paths instead of silent mutation.',
    proof:
      'Planning behavior remains inspectable because state changes and failures are surfaced.',
    fitHeight: true,
  },
]

const trustMechanisms = [
  {
    title: 'Inspectable state',
    text: 'Schedules persist as named records with course associations, audit history, and event DTOs for calendar rendering.',
  },
  {
    title: 'Evidence attribution',
    text: 'Evaluation summaries expose raw metric rows when data exists and avoid fabricated summaries when data is missing.',
  },
  {
    title: 'User control',
    text: 'Ambiguous add, drop, swap, and replace requests ask for clarification before mutating a schedule.',
  },
]

const lessons = [
  'Planning state must outlive chat: schedule schemas, persistence, and sync made recommendations attach to durable application state.',
  'Calendar interfaces force precise contracts: weekly event DTOs, TBA cases, overlaps, and custom events expose what prose can hide.',
  'Evidence must remain inspectable after summarization; raw evaluation rows and no-data behavior preserve uncertainty instead of smoothing it away.',
  'Reliability comes from review loops and bounded changes: regression tests, scoped PRs, and code review made AI workflows safer to merge.',
]

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/85">
      {children}
    </p>
  )
}

function startInlineVideo(video: HTMLVideoElement, playbackRate = 1) {
  video.muted = true
  video.defaultMuted = true
  video.playbackRate = playbackRate

  if (!video.paused) {
    return
  }

  void video.play().catch(() => {
    // Browsers may defer autoplay until the video is visible or the tab is active.
  })
}

function replayInlineVideoAfterPause(
  video: HTMLVideoElement,
  playbackRate = 1,
  pauseMs = 2500,
) {
  if (video.dataset.replayTimer) {
    window.clearTimeout(Number(video.dataset.replayTimer))
  }

  video.dataset.replayTimer = String(
    window.setTimeout(() => {
      delete video.dataset.replayTimer

      if (!video.isConnected || document.visibilityState !== 'visible') {
        return
      }

      video.currentTime = 0
      startInlineVideo(video, playbackRate)
    }, pauseMs),
  )
}

function ScreenshotFigure({
  index,
  src,
  alt,
  caption,
  interpretation,
  proof,
  roleLabel,
  expandImage,
  fitHeight,
  mediaType,
  frameClassName,
  onOpen,
}: (typeof evidenceFigures)[number] & {
  index: number
  onOpen: (index: number) => void
}) {
  const isVideo = mediaType === 'video'

  return (
    <figure className="flex h-full flex-col">
      {roleLabel ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100/75">
          {roleLabel}
        </p>
      ) : null}
      <button
        type="button"
        onClick={() => onOpen(index)}
        className={`group relative flex ${frameClassName ?? 'aspect-[16/10]'} w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-[1.35rem] bg-slate-950/70 shadow-[0_24px_70px_-48px_rgba(34,211,238,0.42)] transition hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`}
        aria-label={`Open ${caption} ${isVideo ? 'demo video' : 'screenshot'} in fullscreen`}
      >
        {isVideo ? (
          <video
            src={src}
            aria-label={alt}
            className={
              expandImage || fitHeight
                ? 'block h-full w-full object-cover object-center'
                : 'block max-h-full w-full object-contain'
            }
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={(event) => {
              startInlineVideo(event.currentTarget)
            }}
            onCanPlay={(event) => {
              startInlineVideo(event.currentTarget)
            }}
            onMouseEnter={(event) => {
              if (!event.currentTarget.ended) {
                startInlineVideo(event.currentTarget)
              }
            }}
            onPause={(event) => {
              if (!event.currentTarget.ended && document.visibilityState === 'visible') {
                startInlineVideo(event.currentTarget)
              }
            }}
            onEnded={(event) => {
              replayInlineVideoAfterPause(event.currentTarget)
            }}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className={
              expandImage
                ? 'block h-full w-full object-cover object-center'
                : fitHeight
                  ? 'block h-full w-full object-cover object-center'
                  : 'block max-h-full w-full object-contain'
            }
          />
        )}
        <span className="absolute right-3 top-3 rounded-full bg-slate-950/75 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-cyan-100 opacity-0 shadow-lg backdrop-blur transition group-hover:opacity-100 group-focus-visible:opacity-100">
          {isVideo ? 'Play' : 'Inspect'}
        </span>
      </button>
      <figcaption className="mt-4 text-sm leading-relaxed text-slate-400">
        <span className="font-semibold text-cyan-100">{caption}.</span>{' '}
        {interpretation}
      </figcaption>
      {proof ? (
        <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-slate-300">
          <span className="font-semibold text-slate-100">What this proves:</span>{' '}
          {proof}
        </p>
      ) : null}
    </figure>
  )
}

export function AtlasCaseStudyPage() {
  const [activeFigureIndex, setActiveFigureIndex] = useState<number | null>(null)
  const activeFigure =
    activeFigureIndex === null ? null : evidenceFigures[activeFigureIndex]

  useEffect(() => {
    if (activeFigureIndex === null) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveFigureIndex(null)
      }
      if (event.key === 'ArrowRight') {
        setActiveFigureIndex((current) =>
          current === null ? current : (current + 1) % evidenceFigures.length,
        )
      }
      if (event.key === 'ArrowLeft') {
        setActiveFigureIndex((current) =>
          current === null
            ? current
            : (current - 1 + evidenceFigures.length) % evidenceFigures.length,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeFigureIndex])

  return (
    <div className="space-y-20">
      <section className="relative pb-28 pt-4 md:pb-36 md:pt-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 transition hover:text-cyan-100"
        >
          <span aria-hidden="true">&lt;</span>
          Back to Homepage
        </a>

        <div className="mt-10 max-w-7xl md:mt-14">
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex h-14 items-center rounded-xl bg-white px-3 shadow-[0_12px_28px_rgba(2,6,23,0.18)] md:h-16">
              <img src={atlasLogo} alt="Atlas" className="h-10 w-auto md:h-14" />
            </div>
            <SectionLabel>Technical Case Study</SectionLabel>
          </div>
          <h1 className="mt-8 max-w-[1100px] text-[clamp(3rem,5.5vw,5.75rem)] font-semibold leading-[1.01] tracking-tight text-slate-100">
            Trustworthy AI planning through inspectable decision making.
          </h1>
          <p className="mt-7 max-w-[900px] text-lg leading-[1.6] text-slate-300 md:text-[1.25rem]">
            Atlas turns course planning from transient AI conversation into
            inspectable, editable planning state backed by SIS data, course
            evaluations, and explicit response contracts.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#problem"
              className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50"
            >
              Case Study
            </a>
            <a
              href="/ppt/AI%20Enabled%20SWE%20Final%20Presentation.pptx"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50"
            >
              Slides
            </a>
            <a
              href="https://atlas.junzheshi.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50"
            >
              Demo
            </a>
            <a
              href="https://github.com/JunzheShi0702/atlas-course-assistant"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50"
            >
              GitHub
            </a>
            <a
              href="https://github.com/JunzheShi0702/atlas-course-assistant/blob/master/CREDITS.md"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50"
            >
              Credits
            </a>
          </div>
        </div>
      </section>

      <section id="problem" className="scroll-mt-28">
        <div className="max-w-4xl">
          <SectionLabel>Problem</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Planning is not the same as search.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Course search can return ranked options from semantic retrieval,
            exact identifiers, or SIS constraints. Planning has to preserve
            schedule state, user preferences, course details, evaluation data,
            and revision history across turns.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            That difference shaped Atlas: recommendations must be tied to
            concrete courses, explicit schedule changes, and visible evidence
            rather than a single generated answer.
          </p>
        </div>
      </section>

      <section id="system" className="scroll-mt-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionLabel>System</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Atlas turns conversation into planning state.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              The calendar is not decoration. It is the interface where AI
              advice becomes editable state: selected sections, custom events,
              conflicts, and schedule changes can be inspected directly.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              The backend supports that surface with stable schedule event DTOs,
              deterministic missing-field behavior, and schedule-course records
              scoped to a user and term.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ScreenshotFigure
              {...evidenceFigures[0]}
              index={0}
              onOpen={setActiveFigureIndex}
            />
          </div>
        </div>
      </section>

      <section id="trust" className="scroll-mt-28">
        <div className="max-w-4xl">
          <SectionLabel>Trust Mechanisms</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            What makes the system trustworthy?
          </h2>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {trustMechanisms.map((mechanism) => (
            <article key={mechanism.title} className="pt-4">
              <p className="text-lg font-semibold tracking-tight text-cyan-50">
                {mechanism.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {mechanism.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="evidence" className="scroll-mt-28">
        <div className="max-w-3xl">
          <SectionLabel>Evidence</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Evidence stays available after generation.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Atlas preserves backing rows and mutation outcomes so users can
            inspect where an answer came from and what the system changed.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          {evidenceFigures.slice(1).map((figure, index) => (
            <ScreenshotFigure
              key={figure.id}
              {...figure}
              index={index + 1}
              onOpen={setActiveFigureIndex}
            />
          ))}
        </div>
      </section>

      <section id="reliability" className="scroll-mt-28">
        <div className="max-w-4xl">
          <SectionLabel>Reliability</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            AI output is treated as a contract.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Atlas uses a golden-case evaluation suite for `/api/agent` that
            validates response contracts at the API boundary, including search,
            summary, details, text, error, and JSON parsing behavior.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            The contracts protect user-visible behavior: empty search preserves
            no-result messaging, missing evaluation data returns no-data
            fallbacks, null details normalize to user-facing text, and
            schedule mutations expose added, removed, failed, or clarification
            outcomes.
          </p>
        </div>
      </section>

      <section id="contributions" className="scroll-mt-28">
        <div className="max-w-4xl">
          <SectionLabel>My Role</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            I connected course information to persistent planning state.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            In a shared team project, I contributed the engineering path that
            made Atlas planning state more durable and inspectable. My work
            began with CourseCard expansion and SIS detail retrieval, then moved
            into schedule schema, schedule-course persistence, add/remove
            workflows, evaluation loading and summary caching, agent-facing SIS
            details, course metrics querying, goal-alignment and preference
            checks, and raw evaluation source-data visibility. The major
            through-line was calendar/planning: I implemented the weekly events
            DTO endpoint and contributed to weekly calendar rendering, event
            dialogs, conflict/TBA handling, custom schedule events, ScheduleChat
            state synchronization, and late-stage tests/CI hardening.
          </p>
        </div>
      </section>

      <section id="lessons" className="scroll-mt-28 pb-12">
        <div className="max-w-4xl">
          <SectionLabel>Lessons</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Lessons learned
          </h2>
          <ol className="mt-8 space-y-5">
            {lessons.map((lesson, index) => (
              <li key={lesson} className="grid grid-cols-[2.5rem_1fr] gap-5">
                <span className="font-mono text-sm text-cyan-200/55">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-lg leading-relaxed text-slate-300">{lesson}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {activeFigure ? (
        <div
          className="fixed inset-0 z-[90] flex bg-slate-950/95 p-3 backdrop-blur-xl md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeFigure.caption} fullscreen view`}
          onClick={() => setActiveFigureIndex(null)}
        >
          <div
            className="m-auto flex max-h-full w-full max-w-7xl flex-col gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/75">
                  Atlas evidence
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {activeFigure.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveFigureIndex(null)}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
              >
                Close
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center rounded-[1.5rem] border border-white/15 bg-black/35 p-2 md:p-4">
              <button
                type="button"
                onClick={() =>
                  setActiveFigureIndex((current) =>
                    current === null
                      ? current
                      : (current - 1 + evidenceFigures.length) %
                        evidenceFigures.length,
                  )
                }
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-slate-950/75 px-3 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 md:left-5"
                aria-label="Previous evidence"
              >
                Prev
              </button>
              {activeFigure.mediaType === 'video' ? (
                <video
                  src={activeFigure.src}
                  aria-label={activeFigure.alt}
                  className="max-h-[72vh] w-auto max-w-full rounded-2xl object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={activeFigure.src}
                  alt={activeFigure.alt}
                  className="max-h-[72vh] w-auto max-w-full rounded-2xl object-contain"
                />
              )}
              <button
                type="button"
                onClick={() =>
                  setActiveFigureIndex((current) =>
                    current === null
                      ? current
                      : (current + 1) % evidenceFigures.length,
                  )
                }
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-slate-950/75 px-3 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 md:right-5"
                aria-label="Next evidence"
              >
                Next
              </button>
            </div>

            <p className="max-w-4xl text-base leading-relaxed text-slate-300">
              <span className="font-semibold text-cyan-100">
                {activeFigure.caption}.
              </span>{' '}
              {activeFigure.interpretation}
            </p>
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
              Esc closes. Arrow keys move between evidence visuals.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
