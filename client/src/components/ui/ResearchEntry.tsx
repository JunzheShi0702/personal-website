import type { ReactNode } from 'react'
import clsx from 'clsx'
import { LinkRow, type EntryLink } from './TextLink'
import { StatusTag } from './StatusTag'

type ResearchEntryProps = {
  id?: string
  period: string
  title: string
  affiliation?: ReactNode
  description?: ReactNode
  note?: ReactNode
  status?: 'progress'
  methods?: string[]
  links?: EntryLink[]
  progress?: { label: string; text: string }[]
  /** A diagram or image shown beside the text on wider screens. */
  figure?: ReactNode
}

export function ResearchEntry({
  id,
  period,
  title,
  affiliation,
  description,
  note,
  status,
  methods,
  links = [],
  progress,
  figure,
}: ResearchEntryProps) {
  const statusTag = status === 'progress' ? <StatusTag tone="progress">In progress</StatusTag> : null

  const details = (
    <>
      {affiliation ? <p className="t-body-sm mt-1 text-ink-muted">{affiliation}</p> : null}
      {description ? <div className="t-body-sm mt-3 space-y-3 text-ink">{description}</div> : null}
      {progress?.length ? (
        <div className="mt-5">
          <h4 className="t-label text-ink-subtle">Progress so far</h4>
          <ol className="mt-2 divide-y divide-rule border-y border-rule">
            {progress.map((step) => (
              <li
                key={step.text.slice(0, 32)}
                className="grid gap-1 py-2.5 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-4"
              >
                <span className="t-meta pt-0.5 text-ink-subtle">{step.label}</span>
                <span className="t-body-sm text-ink">{step.text}</span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
      {note ? <p className="t-body-sm mt-3 text-ink-muted">{note}</p> : null}
      {methods?.length ? <p className="t-meta mt-3 text-ink-subtle">{methods.join(' · ')}</p> : null}
      <LinkRow links={links} className="mt-4" />
    </>
  )

  if (figure) {
    return (
      <article
        id={id}
        className="grid gap-6 border-t border-rule py-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10"
      >
        <div className="min-w-0 md:sticky md:top-24 md:self-start">{figure}</div>
        <div className="min-w-0 max-w-measure">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="t-meta text-ink-subtle">{period}</p>
            {statusTag}
          </div>
          <h3 className="t-title-3 mt-2 text-ink">{title}</h3>
          {details}
        </div>
      </article>
    )
  }

  return (
    <article
      id={id}
      className="grid gap-2 border-t border-rule py-6 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-6"
    >
      <p className="t-meta pt-1 text-ink-subtle">{period}</p>
      <div className="min-w-0 max-w-measure">
        {statusTag}
        <h3 className={clsx('t-title-3 text-ink', statusTag && 'mt-3')}>{title}</h3>
        {details}
      </div>
    </article>
  )
}
