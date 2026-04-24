'use client'

import { Phone, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function CtaBanner() {
  return (
    <section className="py-24 bg-section-dark overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-primary/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-[40px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-white mb-5">
              Your lowest mortgage rate is one call away.
            </h2>
            <p className="text-[17px] leading-[1.65] text-white/60 mb-8 max-w-lg">
              14 to 21 day closings. Zero hidden fees. 10,000+ South Florida families served since 2010.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:3054409201"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-pill bg-accent text-white font-bold text-[15px] hover:bg-accent-hover transition-all hover:-translate-y-0.5 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call (305) 440-9201
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-white/70 hover:text-white transition-colors"
              >
                Or get a free quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg overflow-hidden shadow-lift aspect-[4/3] bg-white/5 border border-white/10 flex items-center justify-center hidden lg:flex"
          >
            {/* Replace with: <Image src="/placeholders/cta-home.jpg" fill alt="South Florida home" className="object-cover opacity-80" /> */}
            <div className="text-center text-white/20 select-none p-8">
              <div className="text-6xl mb-3">🌴</div>
              <p className="text-[14px] font-medium">South Florida home / client photo</p>
              <p className="text-[12px] mt-1 opacity-60">Replace with real photo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
