import { useState } from 'react'
import launchstackLogo from '../assets/launchstack-logo.webp'
import { Figure, type FigureMedia } from '../components/ui/Figure'
import { Lightbox } from '../components/ui/Lightbox'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { LinkRow, TextLink } from '../components/ui/TextLink'

const commitUrl = 'https://github.com/JunzheShi0702/LaunchStack/commit/ce08f6e'

const figures: FigureMedia[] = [
  {
    src: '/demos/launchstack/legal-track-changes-handoff.mp4',
    kind: 'video',
    alt: 'LaunchStack demo: validation, Send for review, Track Changes processing and the tracked DOCX download',
    caption: 'Legal review handoff.',
    detail:
      'I built the request, the handling of the tracked DOCX response and the download.',
  },
  {
    src: '/demos/launchstack/bluesky-api-first-trend-research.mp4',
    kind: 'video',
    alt: 'LaunchStack demo: choosing a platform, trend research through the Bluesky API and a campaign draft',
    caption: 'Trend research through the Bluesky API.',
    detail:
      'I wrote the API clients for Reddit, X, LinkedIn and Bluesky. This clip shows the Bluesky one feeding a campaign draft.',
  },
  {
    src: '/demos/launchstack/rewrite-workflow-handoff.mp4',
    kind: 'video',
    alt: 'LaunchStack demo: pasted text, a finished rewrite, accepting it, and a Rewritten Text document in the editor',
    caption: 'An accepted rewrite opens in the editor.',
    detail:
      "Once accepted, finished rewrite output becomes a temporary 'Rewritten Text' document. I wrote the rewrite workflow and this handoff.",
  },
]

const links = [
  { label: 'Demo', href: 'https://launch-stack-web.vercel.app/', external: true },
  { label: 'Code', href: 'https://github.com/JunzheShi0702/LaunchStack', external: true },
  { label: 'Redlining commit', href: commitUrl, external: true },
]

const myPart = [
  "The document rewrite workflow (file import, step-by-step options, a before-and-after preview with a diff view) and the handoff that turns accepted output into a temporary 'Rewritten Text' editor document.",
  'API clients for Reddit, X, LinkedIn and Bluesky, used for trend research. The demo shows the Bluesky one.',
  'The legal review handoff after validation: the apply-edits request, handling the tracked DOCX response, and the download.',
]

const lessons = [
  'A rewrite that stays inside the AI tool is still a draft, so the handoff into the editor is part of the feature.',
  'Legal reviewers needed a file they could take somewhere else, which meant a DOCX with Track Changes.',
  "Platform access was inconsistent across the four APIs, so each client got its own boundary and fallback, and one failing source couldn't wipe out a campaign's state.",
  'A feature can sit in Git while the app runs a different path, so I learned to trace a button click all the way to the provider call instead of trusting file names.',
]

export function PdrCaseStudyPage() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      <PageHeader
        backTo="/projects"
        backLabel="Projects"
        logo={
          <img
            src={launchstackLogo}
            alt="LaunchStack"
            className="h-12 w-auto rounded-md bg-white px-2 py-1"
          />
        }
        kicker="Project write-up"
        title="LaunchStack: AI document work with a review step"
        lede="LaunchStack is an open-source TypeScript engine and reference app for AI-assisted document work, including legal review, retrieval, marketing research and rewriting. I contributed three pieces: the rewrite workflow and its handoff into the editor, API clients for trend research, and the legal review handoff."
        meta="Open-source team project · Feb – May 2026"
      >
        <LinkRow links={links} />
      </PageHeader>

      <Section id="problem" title="The problem">
        <p className="t-body max-w-measure text-ink">
          LaunchStack starts from the idea that founders keep what they know in documents, calls,
          messages and repositories. A model can draft from all of that quickly, but someone still
          has to see what changed and decide what to keep.
        </p>
      </Section>

      <Section id="legal-review" title="Legal review handoff">
        <p className="t-body max-w-measure text-ink">
          In the legal review flow, validated edits go out as an apply-edits request, the response comes back as a DOCX with Track Changes, and the
          reviewer gets a file they can open outside the app.
        </p>
        <div className="mt-8">
          <Figure media={figures[0]} number={1} aspectClass="aspect-[1920/1104]" onOpen={() => setActive(0)} />
        </div>
      </Section>

      <Section id="evidence" title="Two other workflows">
        <p className="t-body max-w-measure text-ink">
          Generated output stays separate from the document until someone accepts it. Preview,
          accept, export and download are separate states in the app.
        </p>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <Figure media={figures[1]} number={2} aspectClass="aspect-[1920/1104]" onOpen={() => setActive(1)} />
          <Figure media={figures[2]} number={3} aspectClass="aspect-[1920/1104]" onOpen={() => setActive(2)} />
        </div>
      </Section>

      <Section id="engineering" title="Engineering notes">
        <p className="t-body max-w-measure text-ink">
          The README describes a ports-based engine: the host app owns routing, auth, environment
          config, storage, jobs and retrieval. The DOCX redlining work is public in a single
          commit, with API validation, request handling, export behavior and tests.
        </p>
        <p className="t-ui mt-4">
          <TextLink href={commitUrl} external>
            Read the commit
          </TextLink>
        </p>
      </Section>

      <Section id="my-part" title="My part">
        <ul className="t-body prose-body max-w-measure text-ink">
          {myPart.map((item) => (
            <li key={item.slice(0, 24)}>{item}</li>
          ))}
        </ul>
        <p className="t-body mt-4 max-w-measure text-ink-muted">
          The legal template system itself was other people&apos;s work.
        </p>
      </Section>

      <Section id="lessons" title="What I learned">
        <ul className="t-body prose-body max-w-measure text-ink">
          {lessons.map((lesson) => (
            <li key={lesson.slice(0, 24)}>{lesson}</li>
          ))}
        </ul>
      </Section>

      <Lightbox items={figures} activeIndex={active} onChange={setActive} />
    </>
  )
}
