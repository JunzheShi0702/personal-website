import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import clsx from 'clsx'

type PageHeaderProps = {
  title: ReactNode
  kicker?: string
  lede?: ReactNode
  meta?: ReactNode
  backTo?: string
  backLabel?: string
  logo?: ReactNode
  children?: ReactNode
}

export function PageHeader({
  title,
  kicker,
  lede,
  meta,
  backTo,
  backLabel,
  logo,
  children,
}: PageHeaderProps) {
  return (
    <header className="pt-10 md:pt-16">
      {backTo ? (
        <Link
          to={backTo}
          className="t-ui inline-flex items-center gap-1 text-ink-muted transition-colors duration-150 hover:text-ink"
        >
          <ArrowLeft aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
          {backLabel}
        </Link>
      ) : null}
      {logo ? <div className={clsx(backTo && 'mt-8')}>{logo}</div> : null}
      {kicker ? (
        <p className={clsx('t-label text-ink-subtle', (backTo || logo) && 'mt-8')}>{kicker}</p>
      ) : null}
      <h1
        className={clsx(
          't-title-1 max-w-[52rem] text-ink',
          kicker ? 'mt-3' : (backTo || logo) && 'mt-8',
        )}
      >
        {title}
      </h1>
      {lede ? <p className="t-lede mt-5 max-w-measure text-ink-muted">{lede}</p> : null}
      {meta ? <p className="t-meta mt-5 max-w-measure text-ink-subtle">{meta}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  )
}
