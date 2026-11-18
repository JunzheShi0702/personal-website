import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { profile } from '../../content/siteContent'

const navItems = [
  { label: 'Research', to: '/research' },
  { label: 'Publications', to: '/publications' },
  { label: 'Projects', to: '/projects' },
  { label: 'CV', to: '/cv' },
  { label: 'Contact', to: '/#contact' },
]

function isActive(to: string, pathname: string, hash: string) {
  if (to.includes('#')) {
    const [path, anchor] = to.split('#')
    return pathname === (path || '/') && hash === `#${anchor}`
  }
  return pathname === to || pathname.startsWith(`${to}/`)
}

export function Header() {
  const { pathname, hash } = useLocation()

  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-paper">
      <div className="mx-auto flex w-full max-w-page flex-col gap-2 px-5 py-3 sm:min-h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0 md:px-8">
        <Link to="/" className="t-title-3 text-ink">
          {profile.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="t-nav flex flex-wrap gap-x-4 gap-y-1 text-[0.875rem] sm:gap-x-6 sm:text-[0.9375rem]">
            {navItems.map((item) => {
              const active = isActive(item.to, pathname, hash)
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    className={clsx(
                      'inline-block border-b-2 py-1 transition-colors duration-150',
                      active
                        ? 'border-accent text-ink'
                        : 'border-transparent text-ink-muted hover:text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
