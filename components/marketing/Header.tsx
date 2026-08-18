'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail, Menu, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SITE, NAV_LINKS } from '@/lib/site'

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('font-bold tracking-tight', className)}>
      <span className="text-primary">The </span>
      <span className="text-accent-deep">Rate</span>
      <span className="text-primary"> Outlet</span>
    </span>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-shadow duration-300 bg-white',
          scrolled && 'shadow-lift'
        )}
      >
        {/* Utility bar */}
        <div className="bg-primary hidden md:block">
          <div className="container-main h-9 flex items-center justify-between">
            <span className="text-[12.5px] text-white/70 tracking-wide">
              NMLS #{SITE.nmls} · {SITE.license} · Since {SITE.founded}
            </span>
            <div className="flex items-center gap-6">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-1.5 text-[12.5px] text-white/80 hover:text-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-1.5 text-[12.5px] text-white/80 hover:text-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="border-b border-ui-border">
          <div className="container-main h-[72px] flex items-center justify-between gap-8">
            <Link href="/" className="flex-shrink-0">
              <Wordmark className="text-[22px]" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      'relative text-[15px] font-medium transition-colors py-1',
                      active ? 'text-primary' : 'text-ui-fg hover:text-primary'
                    )}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full" />
                    )}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href={SITE.phoneHref} className="text-[15px] font-semibold text-primary">
                {SITE.phone}
              </a>
              <Link href="/contact" className="btn-gold h-11 px-6 text-[14px]">
                Get My Rate
              </Link>
            </div>

            <button
              className="lg:hidden p-2 -mr-2 text-primary"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 flex flex-col shadow-lift"
            >
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-ui-border">
                <Wordmark className="text-[20px]" />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-ui-muted hover:text-ui-fg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 mx-4 mt-4 p-4 bg-primary text-white rounded-lg font-semibold text-[15px]"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                {SITE.phone}
              </a>

              <nav className="flex flex-col px-4 mt-4 gap-0.5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between text-[16px] font-medium text-ui-fg py-4 border-b border-ui-border hover:text-primary transition-colors"
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 text-ui-muted" />
                  </Link>
                ))}
              </nav>

              <div className="p-4 mt-auto border-t border-ui-border">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold w-full py-4 text-[16px]"
                >
                  Get My Rate
                </Link>
                <p className="text-center text-[12px] text-ui-muted mt-3">
                  NMLS #{SITE.nmls} · {SITE.license}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
