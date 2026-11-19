import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import type { FigureMedia } from './Figure'
import { Lightbox } from './Lightbox'
import { LinkRow, type EntryLink } from './TextLink'

type GalleryImage = { src: string; alt: string; caption: string }

type ProjectEntryProps = {
  id?: string
  title: string
  period: string
  context: string
  summary: ReactNode
  myPart?: ReactNode
  image?: { src: string; alt: string }
  imageTo?: string
  /** Extra screenshots shown as thumbnails under the main image; they open in a lightbox. */
  gallery?: GalleryImage[]
  links?: EntryLink[]
}

export function ProjectEntry({
  id,
  title,
  period,
  context,
  summary,
  myPart,
  image,
  imageTo,
  gallery = [],
  links = [],
}: ProjectEntryProps) {
  const [active, setActive] = useState<number | null>(null)
  const galleryMedia: FigureMedia[] = gallery.map((item) => ({ ...item, kind: 'image' }))

  const img = image ? (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className="block aspect-[16/10] w-full rounded-lg border border-rule bg-paper-raised object-cover object-top transition-colors duration-150 hover:border-rule-control"
    />
  ) : null

  return (
    <article
      id={id}
      className={clsx(
        'grid gap-6 border-t border-rule py-8',
        image && 'md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-12',
      )}
    >
      {img ? (
        <div className="min-w-0">
          {imageTo ? (
            <Link to={imageTo} className="block rounded-lg" aria-label={`${title} write-up`}>
              {img}
            </Link>
          ) : (
            img
          )}
          {galleryMedia.length ? (
            <ul className="mt-3 grid grid-cols-3 gap-3">
              {galleryMedia.map((media, index) => (
                <li key={media.src}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Enlarge: ${media.caption}`}
                    className="block w-full cursor-zoom-in overflow-hidden rounded-md border border-rule bg-paper-raised transition-colors duration-150 hover:border-rule-control"
                  >
                    <img
                      src={media.src}
                      alt=""
                      loading="lazy"
                      className="block aspect-[16/10] w-full object-cover object-top"
                    />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
      <div className="min-w-0 max-w-measure">
        <p className="t-meta text-ink-subtle">
          {period} · {context}
        </p>
        <h3 className="t-title-3 mt-2 text-ink">{title}</h3>
        <p className="t-body-sm mt-3 text-ink">{summary}</p>
        {myPart ? (
          <p className="t-body-sm mt-2 text-ink-muted">
            <span className="font-semibold text-ink">My part:</span> {myPart}
          </p>
        ) : null}
        <LinkRow links={links} className="mt-4" />
      </div>
      {galleryMedia.length ? (
        <Lightbox items={galleryMedia} activeIndex={active} onChange={setActive} />
      ) : null}
    </article>
  )
}
