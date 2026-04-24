'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

export function SocialProofBand() {
  return (
    <section className="py-16 bg-section-muted border-y border-ui-border">
      <div className="container-main text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>

          <p className="text-[22px] md:text-[28px] font-bold text-ui-fg leading-[1.3] max-w-2xl mx-auto">
            &ldquo;Join{' '}
            <span className="text-accent">10,000+ South Florida homeowners</span>{' '}
            who&apos;ve trusted The Rate Outlet since 2010.{' '}
            <span className="text-accent">Rated 5/5</span> for delivering the lowest mortgage
            rates with zero hidden fees.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
