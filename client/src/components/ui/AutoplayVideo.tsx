import { useEffect, useRef } from 'react'

type AutoplayVideoProps = {
  src: string
  ariaLabel: string
  className?: string
}

/** Muted, looping demo video that plays only while visible and never under reduced motion. */
export function AutoplayVideo({ src, ariaLabel, className }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    video.muted = true
    video.defaultMuted = true
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false

    const sync = () => {
      if (visible && !motionQuery.matches) {
        void video.play().catch(() => {
          // Autoplay can be deferred until the tab is active.
        })
      } else {
        video.pause()
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.4
        sync()
      },
      { threshold: [0, 0.4, 0.8] },
    )

    observer.observe(video)
    motionQuery.addEventListener('change', sync)

    return () => {
      observer.disconnect()
      motionQuery.removeEventListener('change', sync)
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      src={src}
      aria-label={ariaLabel}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
    />
  )
}
