'use client'

import { TrendingDown, Zap, Phone, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: TrendingDown,
    title: 'Interest Rates',
    body: 'We are THE RATE OUTLET. Your rate is important to you — why should we pick it? We shop every loan across a national lender network. Rates starting at 3%.',
  },
  {
    icon: Zap,
    title: 'Fast Closings',
    body: 'Average closings 14 to 21 days. In today\'s hyped market, lenders are taking 60 to 90 days to close a simple purchase or refinance. We don\'t.',
  },
  {
    icon: Phone,
    title: 'Our 24 Hour Rule',
    body: 'We\'re always available. 24-hour approvals, same-day responses, and daily market interest rate updates on your purchase or refinance.',
  },
  {
    icon: ShieldCheck,
    title: 'Closing Clarity',
    body: 'No hidden fees. We make your costs clear. Other brokers and lenders will slip in fees at the closing table. Sleep well the night before closing with Rate Outlet.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-section-muted">
      <div className="container-main">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 xl:gap-20 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg overflow-hidden shadow-lift aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center order-2 lg:order-1"
          >
            {/* Replace with: <Image src="/placeholders/why-choose-us.jpg" fill alt="South Florida home" className="object-cover" /> */}
            <div className="text-center text-primary/40 select-none p-8">
              <div className="text-6xl mb-3">🏡</div>
              <p className="text-[14px] font-medium">South Florida Home</p>
              <p className="text-[12px] mt-1 opacity-70">Replace with real photo</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-3">The Rate Outlet</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-ui-fg leading-[1.1] tracking-[-0.01em] mb-3">
              Why people choose us
            </h2>
            <p className="text-[16px] text-ui-muted mb-8">
              Why more than 10,000 people trust our services.
            </p>

            {/* 2×2 feature grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0"
            >
              {FEATURES.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.title}
                    variants={itemVariants}
                    className={`flex flex-col gap-3 p-5 ${
                      i === 0 ? 'sm:border-r sm:border-b border-ui-border' :
                      i === 1 ? 'sm:border-b border-ui-border' :
                      i === 2 ? 'sm:border-r border-ui-border' : ''
                    }`}
                  >
                    <Icon className="w-7 h-7 text-accent stroke-[1.5]" />
                    <h3 className="text-[18px] font-bold text-ui-fg">{f.title}</h3>
                    <p className="text-[14px] leading-[1.6] text-ui-muted">{f.body}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
