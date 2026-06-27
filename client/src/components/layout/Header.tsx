import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

const navItems = [
  { label: 'Projects', to: '/projects' },
  { label: 'Research', to: '/research' },
  { label: 'Resume', to: '/#resume' },
  { label: 'Contact', to: '/#contact' },
]

export function Header() {
  const location = useLocation()

  return (
    <header className="sticky top-4 z-30 rounded-2xl border border-white/15 bg-slate-950/70 px-4 py-3 backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link to="/" className="group flex items-center gap-2">
          <div className="grid h-8 w-8 place-content-center rounded-lg border border-cyan-300/40 bg-cyan-300/10 text-xs font-semibold text-cyan-200">
            JS
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-slate-100">
              Junzhe Shi
            </p>
            <p className="text-xs text-slate-400">
              AI Research Engineer in Training
            </p>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center gap-4" aria-label="Primary">
          {navItems.map((item) => {
            const [path, hash] = item.to.split('#')
            const isHashLink = Boolean(hash)
            const isActive = isHashLink
              ? location.pathname === (path || '/') && location.hash === `#${hash}`
              : location.pathname === item.to

            return (
              <Link
                key={item.to}
                to={item.to}
                className={clsx(
                  'group relative py-1 text-xs font-medium text-slate-300 transition hover:text-white focus-visible:outline-none',
                  isActive && 'text-cyan-100',
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={clsx(
                    'absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-cyan-200 transition-transform group-hover:scale-x-100 group-focus-visible:scale-x-100',
                    isActive && 'scale-x-100',
                  )}
                />
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
