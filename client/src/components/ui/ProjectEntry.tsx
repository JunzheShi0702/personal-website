import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { LinkRow, type EntryLink } from './TextLink'

type ProjectEntryProps = {
  id?: string
  title: string
  period: string
  context: string
  summary: ReactNode
  myPart?: ReactNode
  image?: { src: string; alt: string }
  imageTo?: string
  links?: EntryLink[]
}

export function ProjectEntry({
  id,
  title,
  period,
  context,
  summary,
  myPart,
  image,
  imageTo,
  links = [],
}: ProjectEntryProps) {
  const img = image ? (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className="block aspect-[16/10] w-full rounded-lg border border-rule bg-paper-raised object-cover object-top"
    />
  ) : null

  return (
    <article
      id={id}
      className={clsx(
        'grid gap-6 border-t border-rule py-8',
        image && 'md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-12',
      )}
    >
      {img ? (
        imageTo ? (
          <Link to={imageTo} className="block rounded-lg" aria-label={`${title} write-up`}>
            {img}
          </Link>
        ) : (
          img
        )
      ) : null}
      <div className="min-w-0 max-w-measure">
        <p className="t-meta text-ink-subtle">
          {period} · {context}
        </p>
        <h3 className="t-title-3 mt-2 text-ink">{title}</h3>
        <p className="t-body-sm mt-3 text-ink">{summary}</p>
        {myPart ? (
          <p className="t-body-sm mt-2 text-ink-muted">
            <span className="font-semibold text-ink">My part:</span> {myPart}
          </p>
        ) : null}
        <LinkRow links={links} className="mt-4" />
      </div>
    </article>
  )
}
