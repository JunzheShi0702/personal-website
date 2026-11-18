import type { ReactNode } from 'react'
import clsx from 'clsx'
import { AutoplayVideo } from './AutoplayVideo'

export type FigureMedia = {
  src: string
  alt: string
  kind: 'image' | 'video'
  caption: string
  detail?: string
}

type FigureProps = {
  media: FigureMedia
  number?: number
  aspectClass?: string
  onOpen?: () => void
  children?: ReactNode
}

export function Figure({ media, number, aspectClass = 'aspect-[16/10]', onOpen, children }: FigureProps) {
  const mediaClass = 'block h-full w-full object-cover object-top'
  const content =
    media.kind === 'video' ? (
      <AutoplayVideo src={media.src} ariaLabel={media.alt} className={mediaClass} />
    ) : (
      <img src={media.src} alt={media.alt} loading="lazy" className={mediaClass} />
    )

  const frameClass = clsx(
    'block w-full overflow-hidden rounded-lg border border-rule bg-paper-raised',
    aspectClass,
  )

  return (
    <figure>
      {onOpen ? (
        <button
          type="button"
          onClick={onOpen}
          className={clsx(frameClass, 'cursor-zoom-in transition-colors duration-150 hover:border-rule-control')}
          aria-label={`Enlarge: ${media.caption}`}
        >
          {content}
        </button>
      ) : (
        <div className={frameClass}>{content}</div>
      )}
      <figcaption className="t-caption mt-3 max-w-measure text-ink-muted">
        {number ? <span className="font-semibold text-ink">Figure {number}. </span> : null}
        {media.caption}
        {media.detail ? <span> {media.detail}</span> : null}
      </figcaption>
      {children}
    </figure>
  )
}
