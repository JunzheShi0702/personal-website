import { useState } from 'react'
import type { ReactNode } from 'react'
import clsx from 'clsx'
import type { Publication, PublicationFigure } from '../../content/siteContent'
import { profile } from '../../content/siteContent'
import type { FigureMedia } from './Figure'
import { Lightbox } from './Lightbox'
import { linkButtonClass } from './linkStyles'
import { TextLink } from './TextLink'

type PublicationEntryProps = {
  publication: Publication
  showRole?: boolean
  showYear?: boolean
}

const CC_BY_URL = 'https://creativecommons.org/licenses/by/4.0/'

// A subscript in a title, written as `_{...}`.
const SUBSCRIPT = /_\{([^}]*)\}/g

function renderTitle(title: string): ReactNode {
  return title
    .split(SUBSCRIPT)
    .map((part, index) => (index % 2 === 1 ? <sub key={index}>{part}</sub> : part))
}

function plainTitle(title: string) {
  return title.replace(SUBSCRIPT, '$1')
}

function venueDetails(publication: Publication) {
  const volume = publication.volume
    ? `${publication.volume}${publication.issue ? `(${publication.issue})` : ''}`
    : ''
  return [volume, publication.pages].filter(Boolean).join(', ')
}

type PaperFigureProps = {
  figure: PublicationFigure
  publication: Publication
  doiUrl: string
}

/** A figure from the paper as a thumbnail with its credit line; it opens in a lightbox. */
function PaperFigure({ figure, publication, doiUrl }: PaperFigureProps) {
  const [active, setActive] = useState<number | null>(null)
  const rsc = figure.license === 'rsc-author-reuse'
  const source = `“${plainTitle(publication.title)}” (${publication.venue}, ${publication.year})`
  const media: FigureMedia = {
    src: figure.src,
    alt: figure.caption,
    kind: 'image',
    caption: `${figure.label}. ${figure.caption}`,
    detail: rsc
      ? `Reproduced from ${source} with permission from the Royal Society of Chemistry.`
      : `From ${source}, licensed under CC BY 4.0.`,
  }

  return (
    <div className="min-w-0 max-w-[18rem]">
      <button
        type="button"
        onClick={() => setActive(0)}
        aria-label={`Enlarge ${figure.label}: ${figure.caption}`}
        className="block w-full cursor-zoom-in overflow-hidden rounded-lg border border-rule bg-white p-2 transition-colors duration-150 hover:border-rule-control"
      >
        <img
          src={figure.src}
          alt=""
          loading="lazy"
          className="block aspect-[4/3] w-full object-contain"
        />
      </button>
      <p className="t-caption mt-2 text-ink-subtle">
        {rsc ? (
          <>
            {figure.label}. Reproduced from{' '}
            <TextLink href={doiUrl} external>
              this paper
            </TextLink>{' '}
            with permission from the Royal Society of Chemistry.
          </>
        ) : (
          <>
            {figure.label} ·{' '}
            <TextLink href={CC_BY_URL} external>
              CC BY 4.0
            </TextLink>
          </>
        )}
      </p>
      <Lightbox items={[media]} activeIndex={active} onChange={setActive} />
    </div>
  )
}

export function PublicationEntry({
  publication,
  showRole = false,
  showYear = true,
}: PublicationEntryProps) {
  const [citationOpen, setCitationOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const doiUrl = `https://doi.org/${publication.doi}`
  const details = venueDetails(publication)
  const { figure } = publication

  async function copyCitation() {
    if (!navigator.clipboard) return
    try {
      await navigator.clipboard.writeText(publication.citation)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <article
      className={clsx(
        'grid border-t border-rule py-6',
        figure
          ? 'gap-4 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8'
          : clsx('gap-2', showYear && 'sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6'),
      )}
    >
      {figure ? (
        <PaperFigure figure={figure} publication={publication} doiUrl={doiUrl} />
      ) : showYear ? (
        <p className="t-meta pt-1 text-ink-subtle">{publication.year}</p>
      ) : null}
      <div className="min-w-0 max-w-[48rem]">
        {figure && showYear ? (
          <p className="t-meta mb-2 text-ink-subtle">{publication.year}</p>
        ) : null}
        <h3 className="t-title-3 text-ink">
          <a
            href={doiUrl}
            target="_blank"
            rel="noreferrer"
            className="decoration-1 underline-offset-[3px] transition-colors duration-150 hover:text-accent hover:underline"
          >
            {renderTitle(publication.title)}
          </a>
        </h3>
        <p className="t-body-sm mt-2 text-ink-muted">
          {publication.authors.map((author, index) => (
            <span key={author}>
              {index > 0 ? ', ' : null}
              {author === profile.name ? (
                <strong className="font-semibold text-ink">{author}</strong>
              ) : (
                author
              )}
            </span>
          ))}
        </p>
        <p className="t-body-sm text-ink-muted">
          <em>{publication.venue}</em>
          {details ? `, ${details}` : null}
          {showYear ? null : `, ${publication.year}`}
        </p>
        {showRole && publication.role ? (
          <p className="t-body-sm mt-3 text-ink-muted">
            <span className="font-semibold text-ink">My part:</span> {publication.role}
          </p>
        ) : null}
        <p className="t-ui mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <TextLink href={doiUrl} external>
            DOI
          </TextLink>
          <TextLink
            href={`https://api.crossref.org/works/${publication.doi}/transform/application/x-bibtex`}
            external
          >
            BibTeX
          </TextLink>
          <button
            type="button"
            aria-expanded={citationOpen}
            onClick={() => setCitationOpen((open) => !open)}
            className={linkButtonClass}
          >
            {citationOpen ? 'Hide citation' : 'Cite'}
          </button>
        </p>
        {citationOpen ? (
          <div className="mt-3 rounded-lg border border-rule bg-paper-sunken p-4">
            <p className="t-body-sm select-text text-ink-muted">{publication.citation}</p>
            <button
              type="button"
              onClick={() => void copyCitation()}
              className={clsx(linkButtonClass, 't-ui mt-3')}
            >
              {copied ? 'Copied' : 'Copy citation'}
            </button>
          </div>
        ) : null}
      </div>
    </article>
  )
}
