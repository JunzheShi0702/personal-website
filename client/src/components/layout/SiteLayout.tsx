import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function SiteLayout() {
  const location = useLocation()

  useEffect(() => {
    // Keep a small offset so route transitions feel less cramped under the sticky header.
    window.scrollTo({ top: 16, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search, location.hash])

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top_right,#11213f_0,#070b16_35%,#05070f_70%)] text-slate-100">
      <div className="pointer-events-none fixed -right-28 -top-28 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-32 left-10 h-[32rem] w-[32rem] rounded-full bg-violet-400/10 blur-3xl" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-5 md:px-8">
        <Header />
        <main className="mt-6 flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
