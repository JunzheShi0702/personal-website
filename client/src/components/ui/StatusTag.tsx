import type { ReactNode } from 'react'
import clsx from 'clsx'

type StatusTagProps = {
  children: ReactNode
  tone?: 'progress' | 'neutral'
}

export function StatusTag({ children, tone = 'neutral' }: StatusTagProps) {
  return (
    <span
      className={clsx(
        't-ui inline-flex items-center gap-2 rounded-[4px] border px-2 py-0.5',
        tone === 'progress'
          ? 'border-marker-tint bg-marker-tint text-marker'
          : 'border-rule bg-paper-raised text-ink-muted',
      )}
    >
      {tone === 'progress' ? (
        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      ) : null}
      {children}
    </span>
  )
}
