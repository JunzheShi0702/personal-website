import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLocation, useOutlet } from 'react-router-dom'
import { ChatWidget } from '../../features/assistant/ChatWidget'
import { Footer } from './Footer'
import { Header } from './Header'

export function SiteLayout() {
  const location = useLocation()
  const outlet = useOutlet()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1)
      const scrollToTarget = () => {
        const target = document.getElementById(targetId)
        if (!target) return false

        target.scrollIntoView({
          block: 'start',
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        })
        return true
      }

      if (scrollToTarget()) return

      const retry = window.setTimeout(scrollToTarget, prefersReducedMotion ? 0 : 260)
      return () => window.clearTimeout(retry)
    }

    // Keep a small offset so route transitions feel less cramped under the sticky header.
    window.scrollTo({ top: 16, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search, location.hash, prefersReducedMotion])

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
