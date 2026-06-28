import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLocation, useNavigate, useOutlet } from 'react-router-dom'
import { ChatWidget } from '../../features/assistant/ChatWidget'
import { Footer } from './Footer'
import { Header } from './Header'

export function SiteLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const outlet = useOutlet()
  const prefersReducedMotion = useReducedMotion()

  const scrollToHashTarget = useCallback((targetId: string) => {
    const target = document.getElementById(targetId)
    if (!target) return false
    const targetHasFrame =
      target.dataset.jumpHighlight === 'frame' ||
      target.classList.contains('border') ||
      Array.from(target.classList).some((className) => className.startsWith('border-'))
    const titleTarget = target.matches('h1, h2, h3, h4, [data-section-title]')
      ? target
      : target.querySelector<HTMLElement>('h1, h2, h3, h4, [data-section-title]')
    const highlightTarget = targetHasFrame ? target : titleTarget ?? target
    const highlightClass =
      targetHasFrame || !titleTarget
        ? 'section-jump-frame-highlight'
        : 'section-jump-title-highlight'

    target.scrollIntoView({
      block: 'start',
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })

    document
      .querySelectorAll('.section-jump-title-highlight, .section-jump-frame-highlight')
      .forEach((element) => {
        element.classList.remove('section-jump-title-highlight')
        element.classList.remove('section-jump-frame-highlight')
      })

    const highlightDelay = prefersReducedMotion ? 80 : 620
    window.setTimeout(() => highlightTarget.classList.add(highlightClass), highlightDelay)
    window.setTimeout(
      () => highlightTarget.classList.remove(highlightClass),
      highlightDelay + 1800,
    )
    return true
  }, [prefersReducedMotion])

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1)
      const scrollToTarget = () => scrollToHashTarget(targetId)

      if (scrollToTarget()) return

      const retry = window.setTimeout(scrollToTarget, prefersReducedMotion ? 0 : 260)
      return () => window.clearTimeout(retry)
    }

    // Keep a small offset so route transitions feel less cramped under the sticky header.
    window.scrollTo({ top: 16, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search, location.hash, prefersReducedMotion, scrollToHashTarget])

  useEffect(() => {
    function handleHashLinkClick(event: MouseEvent) {
      const eventTarget = event.target
      if (!(eventTarget instanceof Element)) return

      const link = eventTarget.closest<HTMLAnchorElement>('a[href*="#"]')
      if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }

      const url = new URL(link.href)
      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        !url.hash
      ) {
        return
      }

      const targetId = decodeURIComponent(url.hash.slice(1))
      if (!document.getElementById(targetId)) return

      event.preventDefault()
      navigate(`${url.pathname}${url.search}${url.hash}`)
      if (window.location.hash === url.hash) {
        scrollToHashTarget(targetId)
      }
    }

    document.addEventListener('click', handleHashLinkClick)
    return () => document.removeEventListener('click', handleHashLinkClick)
  }, [navigate, prefersReducedMotion, scrollToHashTarget])

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top_right,#11213f_0,#070b16_35%,#05070f_70%)] text-slate-100">
      <div className="pointer-events-none fixed -right-28 -top-28 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-32 left-10 h-[32rem] w-[32rem] rounded-full bg-violet-400/10 blur-3xl" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-5 md:px-8">
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            className="mt-6 flex-1"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {outlet}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
      <ChatWidget />
    </div>
  )
}
