'use client'

import Link from 'next/link'
import { ArrowRight, Star, Clock, TrendingDown, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      {/* Ambient gold glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="container-main relative py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-accent/30 bg-white/5 text-accent text-[12px] font-semibold uppercase tracking-eyebrow mb-6">
              South Florida Mortgage Broker · Since 2010
            </div>

            <h1 className="font-display text-[42px] md:text-[56px] xl:text-[64px] leading-[1.04] tracking-[-0.02em] mb-6">
              Higher expectations.<br />
              <span className="text-accent">Lower rates.</span><br />
              Zero time wasted.
            </h1>

            <p className="text-[17px] leading-[1.65] text-white/70 mb-8 max-w-lg">
              We&apos;re a broker, not a bank — so we shop dozens of lenders and hand you the
              best deal. Over 10,000 South Florida families financed, with closings in as
              little as 14 days.
            </p>

            <div className="flex flex-wrap gap-3 mb-9">
              <Link href="/contact" className="btn-gold px-7 py-3.5 text-[15px]">
                Get My Rate <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/calculator" className="btn-outline-white px-7 py-3.5 text-[15px]">
                Calculate My Payment
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[14px] text-white/60 leading-snug">
                <span className="text-white font-semibold">5.0 rating</span> · 10,000+ closings since 2010
              </p>
            </div>
          </motion.div>

          {/* Right — glass stat card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease }}
            className="relative"
          >
            <div className="rounded-lg bg-white/[0.06] border border-white/10 backdrop-blur-sm p-6 md:p-8 shadow-lift">
              <p className="text-[12px] uppercase tracking-eyebrow text-accent font-semibold mb-6">
                Why borrowers choose us
              </p>
              <div className="space-y-5">
                {[
                  { icon: TrendingDown, stat: 'Rates from 3%', label: 'Shopped across dozens of lenders' },
                  { icon: Clock, stat: '14–21 days', label: 'Average time to close' },
                  { icon: ShieldCheck, stat: '$0 hidden fees', label: 'Transparent pricing, always' },
                ].map((item) => (
                  <div key={item.stat} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-md bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-[20px] font-bold leading-tight">{item.stat}</p>
                      <p className="text-[13px] text-white/55">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[13px] text-white/55">Prefer to talk it through?</p>
                  <p className="text-[15px] font-semibold">Call a real broker today.</p>
                </div>
                <Link href="/contact" className="btn-gold px-5 py-2.5 text-[13px]">
                  Start
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
