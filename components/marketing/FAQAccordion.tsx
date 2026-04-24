'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'How is The Rate Outlet different from a retail bank?',
    a: "We're an independent broker, so we shop your loan across a national lender network. A retail bank can only sell you their own product — one set of rates, one set of terms. We negotiate on your behalf and present the best available option across many lenders.",
  },
  {
    q: 'How long does it take to close?',
    a: '14 to 21 days on a typical purchase or refinance. We\'ve built our pipeline and broker relationships specifically for speed — without cutting underwriting corners. Most retail lenders take 60 to 90 days on the same loan.',
  },
  {
    q: 'What credit score do I need?',
    a: 'Most programs require a 620+ credit score, but we have products for a range of credit situations. Call us for a free pre-qualification — we\'ll tell you exactly where you stand and what options are available.',
  },
  {
    q: 'Are there any upfront fees?',
    a: "No. You don't pay us anything until your loan closes, and every cost is disclosed in writing before you sign anything. No surprises at the closing table — that's our promise.",
  },
  {
    q: 'What states do you serve?',
    a: 'Primarily Florida, with expanding coverage in additional states. Call us at (305) 440-9201 to confirm availability in your state.',
  },
  {
    q: 'Can I lock my rate while I shop for a house?',
    a: 'Yes. Ask your broker about our rate-lock programs on the first call. Locking in a rate protects you from market movements while you find the right home.',
  },
]

export function FAQAccordion() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 xl:gap-20 items-start">

          {/* Left — sticky label column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            <p className="eyebrow mb-3">FAQ</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-ui-fg leading-[1.1] tracking-[-0.01em] mb-4">
              Questions? We&apos;ve got straight answers.
            </h2>
            <p className="text-[15px] leading-[1.65] text-ui-muted mb-6">
              If you don&apos;t see your question below, call us directly — a real broker picks up.
            </p>
            <a
              href="tel:3054409201"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-pill bg-section-muted border border-ui-border text-ui-fg font-semibold text-[14px] hover:bg-accent-soft hover:border-accent hover:text-accent transition-all"
            >
              <Phone className="w-4 h-4" />
              (305) 440-9201
            </a>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Accordion.Root type="single" collapsible className="divide-y divide-ui-border border-t border-b border-ui-border">
              {FAQS.map((faq, i) => (
                <Accordion.Item key={i} value={`item-${i}`}>
                  <Accordion.Trigger
                    className={cn(
                      'group flex w-full items-start justify-between gap-4 py-5 text-left',
                      'text-[16px] font-semibold text-ui-fg hover:text-primary transition-colors'
                    )}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-ui-muted mt-0.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <p className="pb-5 text-[15px] leading-[1.7] text-ui-muted">{faq.a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
