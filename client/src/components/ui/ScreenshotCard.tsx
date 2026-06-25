import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

type ScreenshotCardProps = {
  src: string
  alt: string
  caption: string
  imageClassName?: string
  badge?: string
  figureClassName?: string
  mediaClassName?: string
  captionClassName?: string
  mediaOverlay?: ReactNode
}

function buildFallbackCandidates(src: string): string[] {
  const lower = src.toLowerCase()
  if (lower.endsWith('.png')) {
    return [src.replace(/\.png$/i, '.jpeg'), src.replace(/\.png$/i, '.jpg')]
  }
  if (lower.endsWith('.jpeg')) {
    return [src.replace(/\.jpeg$/i, '.png'), src.replace(/\.jpeg$/i, '.jpg')]
  }
  if (lower.endsWith('.jpg')) {
    return [src.replace(/\.jpg$/i, '.png'), src.replace(/\.jpg$/i, '.jpeg')]
  }
  return []
}

export function ScreenshotCard({
  src,
  alt,
  caption,
  imageClassName,
  badge,
  figureClassName,
  mediaClassName,
  captionClassName,
  mediaOverlay,
}: ScreenshotCardProps) {
  const fallbackCandidates = useMemo(() => buildFallbackCandidates(src), [src])
  const [activeSrc, setActiveSrc] = useState(src)
  const [fallbackIndex, setFallbackIndex] = useState(0)

  useEffect(() => {
    setActiveSrc(src)
    setFallbackIndex(0)
  }, [src])

  const handleImageError = () => {
    if (fallbackIndex >= fallbackCandidates.length) {
      return
    }
    setActiveSrc(fallbackCandidates[fallbackIndex])
    setFallbackIndex((index) => index + 1)
  }

  return (
    <figure
      className={
        figureClassName ?? 'overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80'
      }
    >
      <div className={mediaClassName ?? 'relative'}>
        <img
          src={activeSrc}
          alt={alt}
          onError={handleImageError}
          className={
            imageClassName ??
            'block h-auto w-full object-contain transition duration-500 group-hover:scale-[1.01]'
          }
        />
        {badge ? (
          <span className="absolute left-3 top-3 rounded-full border border-cyan-200/60 bg-slate-950/80 px-2.5 py-1 text-xs font-semibold tracking-[0.08em] text-cyan-100">
            {badge}
          </span>
        ) : null}
        {mediaOverlay}
      </div>
      <figcaption
        className={
          captionClassName ??
          'border-t border-white/10 px-4 py-3 text-sm text-slate-300'
        }
      >
        {caption}
      </figcaption>
    </figure>
  )
}
