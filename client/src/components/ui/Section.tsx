import type { ReactNode } from 'react'
import clsx from 'clsx'
import { TextLink } from './TextLink'

type SectionHeadingProps = {
  id?: string
  title: string
  number?: string
  link?: { label: string; to: string }
}

export function SectionHeading({ id, title, number, link }: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-rule pt-4">
      <h2 id={id ? `${id}-title` : undefined} className="t-title-2 text-ink">
        {number ? (
          <span className="t-meta mr-3 inline-block align-middle text-ink-subtle">{number}</span>
        ) : null}
        {title}
      </h2>
      {link ? (
        <TextLink to={link.to} className="t-ui shrink-0">
          {link.label}
        </TextLink>
      ) : null}
    </div>
  )
}

type SectionProps = SectionHeadingProps & {
  children: ReactNode
  className?: string
}

export function Section({ id, title, number, link, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={clsx('mt-16 md:mt-24', className)}
    >
      <SectionHeading id={id} title={title} number={number} link={link} />
      <div className="mt-8">{children}</div>
    </section>
  )
}
