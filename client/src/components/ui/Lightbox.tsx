import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { FigureMedia } from './Figure'

type LightboxProps = {
  items: FigureMedia[]
  activeIndex: number | null
  onChange: (index: number | null) => void
}

const controlClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-rule-control bg-paper-raised text-ink transition-colors duration-150 hover:border-ink-muted'

export function Lightbox({ items, activeIndex, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const count = items.length

  useEffect(() => {
    if (activeIndex === null) return undefined

    closeRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onChange(null)
      if (event.key === 'ArrowRight') onChange((activeIndex + 1) % count)
      if (event.key === 'ArrowLeft') onChange((activeIndex - 1 + count) % count)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, count, onChange])

  if (activeIndex === null) return null
  const media = items[activeIndex]

  return (
    <div
      className="fixed inset-0 z-[90] flex bg-paper/95 p-3 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={media.caption}
      onClick={() => onChange(null)}
    >
      <div
        className="m-auto flex max-h-full w-full max-w-6xl flex-col gap-4 rounded-xl border border-rule bg-paper-raised p-3 shadow-overlay md:p-5"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="t-caption text-ink-muted">
            <span className="t-meta mr-2 text-ink-subtle">
              {activeIndex + 1}/{count}
            </span>
            <span className="font-semibold text-ink">{media.caption}</span>
          </p>
          <div className="flex shrink-0 gap-2">
            {count > 1 ? (
              <>
                <button
                  type="button"
                  className={controlClass}
                  onClick={() => onChange((activeIndex - 1 + count) % count)}
                  aria-label="Previous"
                >
                  <ChevronLeft aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className={controlClass}
                  onClick={() => onChange((activeIndex + 1) % count)}
                  aria-label="Next"
                >
                  <ChevronRight aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
                </button>
              </>
            ) : null}
            <button
              ref={closeRef}
              type="button"
              className={controlClass}
              onClick={() => onChange(null)}
              aria-label="Close"
            >
              <X aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg bg-paper-sunken">
          {media.kind === 'video' ? (
            <video
              key={media.src}
              src={media.src}
              aria-label={media.alt}
              className="max-h-[72vh] w-auto max-w-full"
              controls
              autoPlay
              muted
              playsInline
            />
          ) : (
            <img src={media.src} alt={media.alt} className="max-h-[72vh] w-auto max-w-full object-contain" />
          )}
        </div>
        {media.detail ? <p className="t-caption max-w-measure text-ink-muted">{media.detail}</p> : null}
        <p className="t-caption text-ink-subtle">Esc closes. Arrow keys move between figures.</p>
      </div>
    </div>
  )
}
