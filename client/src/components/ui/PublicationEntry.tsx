import { useState } from 'react'
import clsx from 'clsx'
import type { Publication } from '../../content/siteContent'
import { profile } from '../../content/siteContent'
import { linkButtonClass } from './linkStyles'
import { TextLink } from './TextLink'

type PublicationEntryProps = {
  publication: Publication
  showRole?: boolean
  showYear?: boolean
}

function venueDetails(publication: Publication) {
  const volume = publication.volume
    ? `${publication.volume}${publication.issue ? `(${publication.issue})` : ''}`
    : ''
  return [volume, publication.pages].filter(Boolean).join(', ')
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
        'grid gap-2 border-t border-rule py-6',
        showYear && 'sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6',
      )}
    >
      {showYear ? <p className="t-meta pt-1 text-ink-subtle">{publication.year}</p> : null}
      <div className="min-w-0 max-w-[48rem]">
        <h3 className="t-title-3 text-ink">
          <a
            href={doiUrl}
            target="_blank"
            rel="noreferrer"
            className="decoration-1 underline-offset-[3px] transition-colors duration-150 hover:text-accent hover:underline"
          >
            {publication.title}
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
