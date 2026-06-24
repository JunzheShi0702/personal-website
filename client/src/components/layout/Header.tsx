import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const navItems = [
  { label: 'Projects', to: '/projects/atlas' },
  { label: 'Research', to: '/research' },
  { label: 'Publications', to: '/publications' },
  { label: 'Resume', to: '/#resume' },
]

export function Header() {
  return (
    <header className="sticky top-4 z-30 rounded-2xl border border-white/15 bg-slate-950/70 p-3 backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <NavLink to="/" className="group flex items-center gap-2">
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
        </NavLink>
        <nav className="flex flex-wrap items-center gap-2" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx(
                  'rounded-full px-3 py-1.5 text-xs font-medium transition',
                  isActive
                    ? 'bg-cyan-300/20 text-cyan-100'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/ask-junzhe"
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold shadow-lg transition',
                isActive
                  ? 'bg-slate-950 text-cyan-200 border border-cyan-300/60'
                  : 'bg-slate-950 text-cyan-200 border border-cyan-300/60 hover:border-cyan-200 hover:text-cyan-100',
              )
            }
          >
            <span aria-hidden="true">✦</span>
            Ask Junzhe AI
            <span aria-hidden="true">✦</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
