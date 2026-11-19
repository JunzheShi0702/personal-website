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
    src: '/screenshots/launchstack-rewrite-start.webp',
    kind: 'image',
    alt: 'LaunchStack rewrite start page with options to import a document, paste from the clipboard or start blank',
    caption: 'The start page of the rewrite workflow.',
    detail: 'Text comes in from an imported file, the clipboard or a blank editor.',
  },
  {
    src: '/demos/launchstack/rewrite-workflow-handoff.mp4',
    kind: 'video',
    alt: 'LaunchStack demo: pasted text, a finished rewrite, accepting it, and a Rewritten Text document in the editor',
    caption: 'An accepted rewrite opens in the editor.',
    detail:
      "Once accepted, finished rewrite output becomes a temporary 'Rewritten Text' document. I wrote the rewrite workflow and this handoff.",
  },
  {
    src: '/screenshots/launchstack-rewrite-options.webp',
    kind: 'image',
    alt: 'Rewrite options: the source text, an instruction, tone presets, sections to rewrite and guardrail switches',
    caption: 'Choosing what to rewrite and how.',
    detail: 'An instruction, tone presets, the sections to touch and guardrails such as keeping the structure.',
  },
  {
    src: '/screenshots/launchstack-diff-review.webp',
    kind: 'image',
    alt: 'Side-by-side diff of the original paragraph and the proposed rewrite, with accept and reject buttons',
    caption: 'Reviewing the proposal as a diff.',
    detail: 'Each section is accepted or rejected before anything is applied.',
  },
  {
    src: '/screenshots/launchstack-editor-handoff.webp',
    kind: 'image',
    alt: 'The accepted rewrite open in the editor as a Rewritten Text document',
    caption: 'The accepted text in the editor.',
    detail: 'From here it can be edited further or saved to Documents.',
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
    src: '/screenshots/launchstack-pipeline-platforms.webp',
    kind: 'image',
    alt: 'Marketing pipeline platform picker with Reddit, Twitter/X, LinkedIn and Bluesky',
    caption: 'Picking a platform.',
    detail: 'Each platform has its own length limit and conventions.',
  },
  {
    src: '/screenshots/launchstack-pipeline-brief.webp',
    kind: 'image',
    alt: 'Campaign brief form with a description, target subreddit, tone and content type',
    caption: 'Describing the campaign.',
    detail: 'The brief, target subreddit, tone and content type for a Reddit post.',
  },
  {
    src: '/screenshots/launchstack-pipeline-steps.webp',
    kind: 'image',
    alt: 'List of pipeline steps for one campaign, including researching platform trends',
    caption: 'The pipeline steps for one campaign.',
    detail: "The 'Researching platform trends' step is where the platform clients I wrote are called.",
  },
  {
    src: '/screenshots/launchstack-campaign-draft.webp',
    kind: 'image',
    alt: 'A Reddit campaign draft with three variants and a list of trend references',
    caption: 'A campaign draft with its trend references.',
    detail: 'Each reference links to its source and says why it is relevant.',
  },
  {
    src: '/demos/launchstack/legal-track-changes-handoff.mp4',
    kind: 'video',
    alt: 'LaunchStack demo: validation, Send for review, Track Changes processing and the tracked DOCX download',
    caption: 'Legal review handoff.',
    detail: 'I built the request, the handling of the tracked DOCX response and the download.',
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
  const open = (index: number) => () => setActive(index)

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

      <div className="mt-10 md:mt-12">
        <Figure media={figures[0]} number={1} aspectClass="aspect-[1600/977]" onOpen={open(0)} />
      </div>

      <Section id="problem" title="The problem">
        <p className="t-body max-w-measure text-ink">
          LaunchStack starts from the idea that founders keep what they know in documents, calls,
          messages and repositories. A model can draft from all of that quickly, but someone still
          has to see what changed and decide what to keep.
        </p>
      </Section>

      <Section id="rewrite" title="Rewrite workflow">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-12">
          <p className="t-body text-ink">
            You bring in text, choose how it should change and get a proposed version next to the
            original as a diff. Nothing touches the document until you accept it. Accepted output
            opens in the editor, so the rewrite ends up as a document someone can keep working on
            rather than a reply in a chat.
          </p>
          <Figure media={figures[1]} number={2} aspectClass="aspect-[1920/1104]" onOpen={open(1)} />
        </div>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-3">
          <Figure media={figures[2]} number={3} aspectClass="aspect-[1600/1407]" onOpen={open(2)} />
          <Figure media={figures[3]} number={4} aspectClass="aspect-[1400/1230]" onOpen={open(3)} />
          <Figure media={figures[4]} number={5} aspectClass="aspect-[1600/1403]" onOpen={open(4)} />
        </div>
      </Section>

      <Section id="trend-research" title="Trend research">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-12">
          <p className="t-body text-ink">
            The marketing pipeline drafts campaign posts from a company&apos;s own documents. One of
            its steps looks up what people are currently discussing on the chosen platform. I wrote
            the API clients behind that step for Reddit, X, LinkedIn and Bluesky, each with its own
            fallback, so one platform failing doesn&apos;t break the whole campaign.
          </p>
          <Figure media={figures[5]} number={6} aspectClass="aspect-[1920/1104]" onOpen={open(5)} />
        </div>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <Figure media={figures[6]} number={7} aspectClass="aspect-[16/10]" onOpen={open(6)} />
          <Figure media={figures[7]} number={8} aspectClass="aspect-[16/10]" onOpen={open(7)} />
          <Figure media={figures[8]} number={9} aspectClass="aspect-[16/10]" onOpen={open(8)} />
          <Figure media={figures[9]} number={10} aspectClass="aspect-[16/10]" onOpen={open(9)} />
        </div>
      </Section>

      <Section id="legal-review" title="Legal review handoff">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-12">
          <p className="t-body text-ink">
            In the legal review flow, validated edits go out as an apply-edits request, the response
            comes back as a DOCX with Track Changes, and the reviewer gets a file they can open
            outside the app.
          </p>
          <Figure media={figures[10]} number={11} aspectClass="aspect-[1920/1104]" onOpen={open(10)} />
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
