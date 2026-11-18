import { Suspense, useCallback, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ChatWidget } from '../../features/assistant/ChatWidget'
import { Footer } from './Footer'
import { Header } from './Header'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function SiteLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToHashTarget = useCallback((targetId: string) => {
    const target = document.getElementById(targetId)
    if (!target) return false

    const reduced = prefersReducedMotion()
    target.scrollIntoView({ block: 'start', behavior: reduced ? 'auto' : 'smooth' })

    const title = target.matches('h1, h2, h3')
      ? target
      : target.querySelector<HTMLElement>('h1, h2, h3')
    if (title) {
      document
        .querySelectorAll('.section-jump-title-highlight')
        .forEach((element) => element.classList.remove('section-jump-title-highlight'))
      const delay = reduced ? 0 : 450
      window.setTimeout(() => title.classList.add('section-jump-title-highlight'), delay)
      window.setTimeout(() => title.classList.remove('section-jump-title-highlight'), delay + 1600)
    }
    return true
  }, [])

  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1))
      if (scrollToHashTarget(targetId)) return undefined
      const retry = window.setTimeout(() => scrollToHashTarget(targetId), 200)
      return () => window.clearTimeout(retry)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return undefined
  }, [location.pathname, location.search, location.hash, scrollToHashTarget])

  useEffect(() => {
    function handleHashLinkClick(event: MouseEvent) {
      const eventTarget = event.target
      if (!(eventTarget instanceof Element)) return

      const link = eventTarget.closest<HTMLAnchorElement>('a[href*="#"]')
      if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }

      const url = new URL(link.href)
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) {
        return
      }

      const targetId = decodeURIComponent(url.hash.slice(1))
      if (!document.getElementById(targetId)) return

      event.preventDefault()
      navigate(`${url.pathname}${url.search}${url.hash}`)
      if (window.location.hash === url.hash) scrollToHashTarget(targetId)
    }

    document.addEventListener('click', handleHashLinkClick)
    return () => document.removeEventListener('click', handleHashLinkClick)
  }, [navigate, scrollToHashTarget])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#main"
        className="t-ui sr-only rounded-[4px] bg-paper-raised px-3 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="mx-auto w-full max-w-page flex-1 px-5 pb-24 md:px-8">
        <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
