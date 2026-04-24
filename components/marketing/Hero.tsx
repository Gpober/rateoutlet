'use client'

import { ArrowRight, Clock, TrendingDown, Star } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const AVATAR_INITIALS = ['M', 'R', 'S', 'J']

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -32])

  return (
    <section className="relative pt-[116px] md:pt-[156px] pb-20 bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#FDECEC_0%,_transparent_60%)] pointer-events-none" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 xl:gap-20 items-center min-h-[560px]">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-pill bg-accent-soft text-accent text-[12px] font-semibold uppercase tracking-eyebrow mb-6">
              Mortgages Made Simple
            </div>

            {/* Display H1 */}
            <h1 className="font-display text-[48px] md:text-[58px] xl:text-[68px] leading-[1.02] tracking-[-0.02em] text-ui-fg mb-6">
              Higher Expectations.<br />
              <em className="not-italic text-accent">Lowest Mortgage Rates.</em><br />
              Zero Time Wasted.
            </h1>

            {/* Subhead */}
            <p className="text-[17px] leading-[1.65] text-ui-muted mb-8 max-w-lg">
              South Florida&apos;s leading mortgage broker since 2010. Over 10,000 clients served.
              14–21 day closings, no hidden fees, 24-hour approvals.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#rates" className="btn-primary px-7 py-3.5 text-[15px]">
                See Today&apos;s Rates <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-outline px-7 py-3.5 text-[15px]">
                Free Quote
              </a>
            </div>

            {/* Trust microstrip */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {AVATAR_INITIALS.map((initial, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white text-[12px] font-bold"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div className="text-[14px] text-ui-muted leading-snug">
                <span className="flex items-center gap-1 text-accent font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="ml-0.5">5.0</span>
                </span>
                <span>10,000+ closings since 2010</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Parallax wrapper */}
            <motion.div ref={imageRef} style={{ y }}>
              {/* Hero image — replace src with real photo */}
              <div className="relative rounded-lg overflow-hidden shadow-lift aspect-[4/5] bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30 flex items-center justify-center">
                {/* Placeholder — swap with <Image src="/placeholders/hero.jpg" fill alt="South Florida Home" className="object-cover" /> */}
                <div className="text-center p-8 text-primary/40 select-none">
                  <div className="text-7xl mb-4">🏠</div>
                  <p className="text-[15px] font-medium">South Florida Home</p>
                  <p className="text-[13px] mt-1 opacity-70">Replace with hero.jpg or video</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card — bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lift px-4 py-3.5 flex items-center gap-3 border border-ui-border"
            >
              <div className="w-10 h-10 bg-accent-soft rounded-md flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-[18px] font-bold text-ui-fg leading-tight">14–21 days</p>
                <p className="text-[12px] text-ui-muted">avg close time</p>
              </div>
            </motion.div>

            {/* Floating card — top-right */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-5 -right-5 bg-white rounded-xl shadow-lift px-4 py-3.5 flex items-center gap-3 border border-ui-border"
            >
              <div className="w-10 h-10 bg-accent-soft rounded-md flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-[18px] font-bold text-ui-fg leading-tight">Rates from 3%</p>
                <p className="text-[12px] text-ui-muted">competitive pricing</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
