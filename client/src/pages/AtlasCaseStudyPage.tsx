import { useState } from 'react'
import atlasLogo from '../assets/atlas-logo.webp'
import { Figure, type FigureMedia } from '../components/ui/Figure'
import { Lightbox } from '../components/ui/Lightbox'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { LinkRow } from '../components/ui/TextLink'

const figures: FigureMedia[] = [
  {
    src: '/demos/atlas/atlas-planning-demo.mp4',
    kind: 'video',
    alt: 'Atlas demo: exploring courses, adding them explicitly, and the weekly calendar updating',
    caption: 'Planning in the calendar.',
    detail: 'Selected courses and custom events become calendar entries you can edit.',
  },
  {
    src: '/demos/atlas/atlas-evidence-demo.mp4',
    kind: 'video',
    alt: 'Atlas demo: an evaluation summary opening the raw rows it was built from',
    caption: 'An evaluation summary with its raw rows.',
    detail:
      'Summaries stay tied to metric names, terms, instructors and respondent counts when the rows exist.',
  },
  {
    src: '/demos/atlas/atlas-clarification-demo.mp4',
    kind: 'video',
    alt: 'Atlas demo: the assistant asks for a missing weekday, then adds a Monday event to the calendar',
    caption: 'Asking before changing the schedule.',
    detail:
      'Changes come back as added, removed, failed or needs clarification. Here a missing weekday gets a question before the event is added.',
  },
]

const links = [
  { label: 'Demo', href: 'https://atlas.junzheshi.com', external: true },
  { label: 'Code', href: 'https://github.com/JunzheShi0702/atlas-course-assistant', external: true },
  {
    label: 'Slides (PPTX)',
    href: '/ppt/AI%20Enabled%20SWE%20Final%20Presentation.pptx',
    external: true,
  },
  {
    label: 'Credits',
    href: 'https://github.com/JunzheShi0702/atlas-course-assistant/blob/master/CREDITS.md',
    external: true,
  },
]

const lessons = [
  'Recommendations only became useful once they were attached to saved schedule data instead of living in the chat history.',
  'Weekly event formats, TBA sections, overlaps and custom events all exposed gaps in the calendar that a prose answer would have hidden.',
  'Small pull requests with regression tests and code review made changes to the AI features much safer to merge.',
]

export function AtlasCaseStudyPage() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      <PageHeader
        backTo="/projects"
        backLabel="Projects"
        logo={
          <img
            src={atlasLogo}
            alt="Atlas"
            className="h-12 w-auto rounded-md bg-white px-2 py-1"
          />
        }
        kicker="Project write-up"
        title="Atlas: an AI assistant for course planning"
        lede="Atlas helps Johns Hopkins students search for courses and build a schedule. I worked on the parts that turn a suggestion into a schedule you can edit, and on keeping the course evaluation data visible behind the summaries."
        meta="Team project · Johns Hopkins · Feb – May 2026"
      >
        <LinkRow links={links} />
      </PageHeader>

      <Section id="problem" title="The problem">
        <p className="t-body max-w-measure text-ink">
          Course search can rank options using semantic retrieval, exact course codes or SIS
          data. For planning, the schedule has to persist from one turn to the next, along with
          the student&apos;s preferences, course details and evaluation data, and every change to
          it has to be explicit. In Atlas, each suggestion is tied to a course and a specific
          change in the schedule.
        </p>
      </Section>

      <Section id="system" title="How it works">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-12">
          <p className="t-body text-ink">
            The calendar holds the actual state of the plan: selected sections, custom events and
            conflicts, all editable. Behind it, the backend serves weekly schedule events in a
            fixed format, handles missing fields the same way every time and stores which courses
            belong to which schedule, per user and term.
          </p>
          <Figure media={figures[0]} number={1} aspectClass="aspect-[2500/1738]" onOpen={() => setActive(0)} />
        </div>
      </Section>

      <Section id="evidence" title="Keeping the evidence visible">
        <p className="t-body max-w-measure text-ink">
          Schedules are saved as named records with their courses and an audit history.
          Evaluation summaries come with the raw metric rows they were built from, and when data
          is missing Atlas says there is none instead of writing a summary anyway. If a request to
          add, drop, swap or replace a course is ambiguous, Atlas asks before it changes anything.
        </p>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <Figure media={figures[1]} number={2} aspectClass="aspect-[1920/1104]" onOpen={() => setActive(1)} />
          <Figure media={figures[2]} number={3} aspectClass="aspect-[1920/1334]" onOpen={() => setActive(2)} />
        </div>
      </Section>

      <Section id="testing" title="Testing">
        <p className="t-body max-w-measure text-ink">
          We wrote golden test cases for the <code className="font-mono text-[0.875em]">/api/agent</code>{' '}
          endpoint that check responses at the API boundary: search, summaries, course details,
          plain text, errors and JSON parsing. They pin down things users actually see, such as
          the no-results message for an empty search, the fallback when evaluation data is
          missing, and the outcome reported for each schedule change.
        </p>
      </Section>

      <Section id="my-part" title="My part">
        <div className="t-body prose-body max-w-measure text-ink">
          <p>
            I started with the course card, expanding it and pulling course details from SIS, and
            then moved on to the schedule itself: its schema, saving the links between schedules
            and courses, and the add and remove flows. Along the way I loaded course evaluations
            and cached their summaries, gave the agent access to SIS details and course metrics,
            added checks against the student&apos;s goals and preferences, and made the raw
            evaluation rows visible.
          </p>
          <p>
            Most of my time went into the calendar. I wrote the weekly events endpoint and worked
            on calendar rendering, event dialogs, conflicts and TBA times, custom events, keeping
            ScheduleChat in sync, and the tests and CI at the end.
          </p>
        </div>
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
