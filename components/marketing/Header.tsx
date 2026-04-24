'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Mail, Menu, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Buy A Home', href: '#loan-products' },
  { label: 'Refinance', href: '#loan-products' },
  { label: "Today's Rates", href: '#rates' },
  { label: 'Loan Products', href: '#loan-products' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
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
        <div className="bg-section-muted border-b border-ui-border hidden md:block">
          <div className="container-main h-9 flex items-center justify-between">
            <span className="text-[13px] text-ui-muted">NMLS #1017196 · Licensed in FL</span>
            <div className="flex items-center gap-5">
              <a
                href="tel:3054409201"
                className="flex items-center gap-1.5 text-[13px] text-ui-muted hover:text-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                (305) 440-9201
              </a>
              <a
                href="mailto:info@therateoutlet.com"
                className="flex items-center gap-1.5 text-[13px] text-ui-muted hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                info@therateoutlet.com
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="border-b border-ui-border">
          <div className="container-main h-20 flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-1">
              <span className="text-[22px] font-bold tracking-tight">
                <span className="text-primary">The </span>
                <span className="text-accent">Rate</span>
                <span className="text-primary"> Outlet</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[15px] font-medium text-ui-fg hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#rates"
                className="text-[15px] font-medium text-primary hover:text-primary-hover transition-colors"
              >
                Today&apos;s Rates
              </Link>
              <a href="#contact" className="btn-primary h-11 px-6 text-[14px]">
                Free Quote
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 -mr-2 text-ui-fg hover:text-primary transition-colors"
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
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-ui-border">
                <span className="text-[20px] font-bold">
                  <span className="text-primary">The </span>
                  <span className="text-accent">Rate</span>
                  <span className="text-primary"> Outlet</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-ui-muted hover:text-ui-fg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Prominent phone CTA */}
              <a
                href="tel:3054409201"
                className="flex items-center gap-3 mx-4 mt-4 p-4 bg-accent text-white rounded-lg font-semibold text-[15px]"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                (305) 440-9201
              </a>

              {/* Nav links */}
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

              {/* Bottom CTA */}
              <div className="p-4 mt-auto border-t border-ui-border">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-4 bg-primary text-white font-bold rounded-pill text-[16px] hover:bg-primary-hover transition-colors"
                >
                  Get Free Quote
                </a>
                <p className="text-center text-[12px] text-ui-muted mt-3">NMLS #1017196 · Licensed in FL</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
