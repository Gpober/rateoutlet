'use client'

import { Star, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function TestimonialBand() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 xl:gap-20 items-center max-w-4xl mx-auto">

          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <div className="w-[140px] h-[140px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center shadow-lift mx-auto lg:mx-0">
              {/* Replace with: <Image src="/placeholders/kate-schadler.jpg" fill alt="Kate Schadler" className="object-cover" /> */}
              <div className="text-4xl select-none">👩</div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="text-[20px] md:text-[24px] font-display leading-[1.35] text-ui-fg mb-5 tracking-[-0.01em]">
              &ldquo;I tried to refinance twice before working with Gonzalo. No one could come close
              to his rate and deal. He is very professional and very willing to work with you. Would
              happily do business with him again.&rdquo;
            </blockquote>

            {/* Attribution */}
            <p className="text-[15px] font-semibold text-ui-fg">
              Kate Schadler{' '}
              <span className="font-normal text-ui-muted">· Miami, FL</span>
            </p>

            {/* Link */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 mt-4 text-[14px] font-semibold text-accent hover:text-accent-hover transition-colors group"
            >
              Read more client stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
