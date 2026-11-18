import { contactLinks, profile } from '../../content/siteContent'
import { TextLink } from '../ui/TextLink'

const builtOn = new Date(`${__BUILD_DATE__}T12:00:00Z`).toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="t-caption mx-auto flex w-full max-w-page flex-col gap-3 px-5 py-6 text-ink-subtle sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name} · Updated {builtOn}
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          {contactLinks.map((link) => (
            <TextLink key={link.label} href={link.href} external={link.external}>
              {link.label}
            </TextLink>
          ))}
        </p>
      </div>
    </footer>
  )
}
