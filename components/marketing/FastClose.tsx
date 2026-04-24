'use client'

import { Check, Phone, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const CHECKLIST = [
  'Dedicated broker — you talk to a human, not a call center',
  '24-hour pre-approvals',
  'Same-day response guarantee',
  'Daily market rate updates while you shop',
  'Zero hidden fees at the closing table',
]

export function FastClose() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-3">Why we close in 14–21 days</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-ui-fg leading-[1.1] tracking-[-0.01em] mb-5">
              A mortgage process built to move.
            </h2>
            <p className="text-[16px] leading-[1.7] text-ui-muted mb-7">
              Most lenders take 60 to 90 days to close a standard purchase or refinance. We built
              Rate Outlet to do it in 14 to 21 — because your rate lock, your move-in date, and your
              life don&apos;t stop while underwriting drags.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent stroke-[2.5]" />
                  </span>
                  <span className="text-[15px] leading-[1.6] text-ui-fg">{item}</span>
                </li>
              ))}
            </ul>

            {/* Button row */}
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary px-7 py-3.5">
                Start my application <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:3054409201"
                className="btn-outline px-7 py-3.5 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Talk to a broker
              </a>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg overflow-hidden shadow-lift aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/25 flex items-center justify-center"
          >
            {/* Replace with: <Image src="/placeholders/closing.jpg" fill alt="Family at closing" className="object-cover" /> */}
            <div className="text-center text-primary/40 select-none p-8">
              <div className="text-6xl mb-3">🔑</div>
              <p className="text-[14px] font-medium">Keys / closing photo</p>
              <p className="text-[12px] mt-1 opacity-70">Replace with real photo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
