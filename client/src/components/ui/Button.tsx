import type { ReactNode } from 'react'
import clsx from 'clsx'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  href?: string
  download?: boolean
  external?: boolean
  onClick?: () => void
  className?: string
}

const base =
  't-ui inline-flex items-center gap-2 rounded-[4px] border px-4 py-2 no-underline transition-colors duration-150'

const variants = {
  primary:
    'border-accent bg-accent text-on-accent hover:border-accent-strong hover:bg-accent-strong',
  secondary: 'border-rule-control bg-paper-raised text-ink hover:border-ink-muted',
}

export function Button({
  children,
  variant = 'secondary',
  icon,
  href,
  download,
  external,
  onClick,
  className,
}: ButtonProps) {
  const classes = clsx(base, variants[variant], className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {icon}
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  )
}
