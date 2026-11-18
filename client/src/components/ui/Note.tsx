import type { ReactNode } from 'react'
import clsx from 'clsx'

type NoteProps = {
  label: string
  children: ReactNode
  className?: string
}

export function Note({ label, children, className }: NoteProps) {
  return (
    <aside
      className={clsx(
        'max-w-measure rounded-lg border border-rule bg-paper-sunken px-5 py-4 md:px-6',
        className,
      )}
    >
      <p className="t-label text-ink-subtle">{label}</p>
      <div className="t-body-sm mt-2 text-ink">{children}</div>
    </aside>
  )
}
