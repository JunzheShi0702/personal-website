import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import clsx from 'clsx'
import { linkClass } from './linkStyles'

export type EntryLink = {
  label: string
  to?: string
  href?: string
  external?: boolean
  download?: boolean
}

type TextLinkProps = {
  children: ReactNode
  to?: string
  href?: string
  external?: boolean
  download?: boolean
  className?: string
}

export function TextLink({ children, to, href, external, download, className }: TextLinkProps) {
  const classes = clsx(linkClass, className)

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      download={download || undefined}
    >
      {children}
      {external ? (
        <ArrowUpRight
          aria-hidden="true"
          strokeWidth={1.75}
          className="ml-0.5 inline h-3.5 w-3.5 align-[-1px]"
        />
      ) : null}
    </a>
  )
}

export function LinkRow({ links, className }: { links: EntryLink[]; className?: string }) {
  if (!links.length) return null

  return (
    <p className={clsx('t-ui flex flex-wrap items-center gap-x-4 gap-y-2', className)}>
      {links.map((link) => (
        <TextLink
          key={`${link.label}-${link.to ?? link.href}`}
          to={link.to}
          href={link.href}
          external={link.external}
          download={link.download}
        >
          {link.label}
        </TextLink>
      ))}
    </p>
  )
}
