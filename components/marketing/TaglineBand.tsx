'use client'

import { motion } from 'framer-motion'

export function TaglineBand() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[32px] md:text-[42px] font-bold text-ui-fg leading-[1.1] tracking-[-0.01em] max-w-2xl mx-auto mb-6">
            Your rate is important to you.{' '}
            <span className="text-accent">Why should we pick it?</span>
          </h2>
          <p className="text-[17px] leading-[1.65] text-ui-muted max-w-[720px] mx-auto">
            We shop your loan across a national network of lenders so you get the rate you deserve —
            not the one that&apos;s most profitable for us. Purchase, refinance, HELOC, or reverse
            mortgage, we close fast and tell you every number up front.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
