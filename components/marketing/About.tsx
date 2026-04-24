'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-[45fr_55fr] gap-12 xl:gap-20 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg overflow-hidden shadow-lift aspect-square bg-gradient-to-br from-primary/15 to-primary/30 flex items-center justify-center max-w-[520px] w-full mx-auto"
          >
            {/* Replace with: <Image src="/placeholders/team.jpg" fill alt="The Rate Outlet team" className="object-cover" /> */}
            <div className="text-center text-primary/40 select-none p-8">
              <div className="text-7xl mb-3">👨‍💼</div>
              <p className="text-[15px] font-medium">Team / Gonzalo photo</p>
              <p className="text-[12px] mt-1 opacity-70">Replace with real photo</p>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-3">About Us</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-ui-fg leading-[1.1] tracking-[-0.01em] mb-6">
              South Florida&apos;s leading mortgage provider since 2010.
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.7] text-ui-muted">
              <p>
                The Rate Outlet was founded to fix what&apos;s broken in retail mortgage — opaque fees,
                slow closings, and lenders who prioritize their margin over your rate. Since 2010 we&apos;ve
                served over 10,000 clients across South Florida, from first-time buyers in Miami to
                multi-family investors in Fort Lauderdale.
              </p>
              <p>
                As an independent broker, we shop your file across a national lender network and only
                get paid when you close on the best available terms. No pressure. No bait-and-switch.
                Just the lowest rate we can find, delivered in 14 to 21 days.
              </p>
              <p>
                Gonzalo and the Rate Outlet team treat every file like it&apos;s our own mortgage.
                That&apos;s why our clients come back — and send their family.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 mt-7 text-[15px] font-semibold text-accent hover:text-accent-hover transition-colors group"
            >
              Meet the team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
