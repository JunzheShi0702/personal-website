import type { ReactNode } from 'react'
import clsx from 'clsx'

type BentoCardProps = {
  children: ReactNode
  className?: string
}

export function BentoCard({ children, className }: BentoCardProps) {
  return (
    <article
      className={clsx(
        'group rounded-2xl border border-white/15 bg-slate-900/70 p-5 shadow-[0_0_0_1px_rgba(148,163,184,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-slate-900/95',
        className,
      )}
    >
      {children}
    </article>
  )
}
