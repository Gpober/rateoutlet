'use client'

import { ArrowRight, Flame } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type CardProps = {
  title: string
  description: string
  bestFor: string[]
  ctaLabel: string
  ctaHref: string
  highlighted?: boolean
  badge?: string
}

function LoanProductCard({ title, description, bestFor, ctaLabel, ctaHref, highlighted, badge }: CardProps) {
  return (
    <motion.div
      whileHover={{ translateY: highlighted ? -12 : -4, transition: { duration: 0.2 } }}
      className={cn(
        'relative flex flex-col rounded-lg p-8 transition-shadow duration-300 border',
        highlighted
          ? 'border-accent shadow-lift bg-white -translate-y-2'
          : 'border-ui-border shadow-card bg-white hover:shadow-lift'
      )}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-pill bg-accent text-white text-[12px] font-bold uppercase tracking-wide shadow-sm">
            <Flame className="w-3.5 h-3.5" /> {badge}
          </span>
        </div>
      )}

      <h3 className="text-[22px] font-bold text-ui-fg mb-3 mt-2">{title}</h3>
      <p className="text-[15px] leading-[1.65] text-ui-muted mb-6">{description}</p>

      <div className="mb-8">
        <p className="text-[12px] uppercase tracking-eyebrow text-ui-muted font-semibold mb-3">Best for</p>
        <ul className="space-y-2">
          {bestFor.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[14px] text-ui-fg">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={ctaHref}
        className={cn(
          'mt-auto inline-flex items-center gap-2 text-[14px] font-semibold transition-colors group',
          highlighted ? 'text-accent hover:text-accent-hover' : 'text-primary hover:text-primary-hover'
        )}
      >
        {ctaLabel}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  )
}

const PRODUCTS: CardProps[] = [
  {
    title: 'Buy a Home',
    description:
      'Pre-approval to keys. Competitive purchase rates with a broker who fights for every basis point — from first offer to final signature.',
    bestFor: ['First-time buyers', 'Second homes', 'Investment property'],
    ctaLabel: 'Get pre-approved →',
    ctaHref: '#contact',
  },
  {
    title: 'Refinance',
    description:
      "Lower your rate, shorten your term, or pull cash out. We'll run the numbers and only recommend it if it genuinely wins for you.",
    bestFor: ['Lower monthly payment', 'Shorter loan term', 'Cash-out for renovations'],
    ctaLabel: 'See refinance rates →',
    ctaHref: '#contact',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    title: 'HELOC & Equity',
    description:
      'Tap the value in your home with a flexible line of credit for renovations, debt consolidation, or major life expenses.',
    bestFor: ['Flexible access to funds', 'Lower initial rates', 'Home improvements'],
    ctaLabel: 'Get your rate →',
    ctaHref: '#contact',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export function LoanProducts() {
  return (
    <section id="loan-products" className="section-pad bg-section-muted">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-3">Loan Products</p>
          <h2 className="text-[32px] md:text-[42px] font-bold text-ui-fg leading-[1.1] tracking-[-0.01em] mb-4">
            A loan product for every situation
          </h2>
          <p className="text-[17px] text-ui-muted max-w-[640px] mx-auto">
            Whether you&apos;re buying your first home, refinancing for a lower rate, or unlocking
            equity for a renovation, we have a mortgage built for you.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6 items-start pt-6"
        >
          {PRODUCTS.map((product) => (
            <motion.div key={product.title} variants={itemVariants}>
              <LoanProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
