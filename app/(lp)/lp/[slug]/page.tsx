import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check, Phone } from 'lucide-react'
import { QuoteForm } from '@/components/marketing/QuoteForm'
import { LANDING_PAGES, getLandingPage } from '@/lib/landing-pages'
import { SITE } from '@/lib/site'

type Props = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return LANDING_PAGES.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getLandingPage(params.slug)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    // Paid / social traffic only — keep out of search results.
    robots: { index: false, follow: false },
  }
}

export default function LandingPage({ params }: Props) {
  const page = getLandingPage(params.slug)
  if (!page) notFound()

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute top-[-10%] right-[-5%] w-[460px] h-[460px] rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div className="container-main relative py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 xl:gap-14 items-start">
          <div className="lg:pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-accent/30 bg-white/5 text-accent text-[12px] font-semibold uppercase tracking-eyebrow mb-5">
              {page.eyebrow}
            </div>
            <h1 className="font-display text-[38px] md:text-[52px] leading-[1.05] tracking-[-0.02em] mb-5">
              {page.headline}
            </h1>
            <p className="text-[17px] leading-[1.65] text-white/75 mb-7 max-w-lg">{page.sub}</p>
            <ul className="space-y-3.5 mb-8">
              {page.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[16px]">
                  <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </span>
                  <span className="text-white/90">{b}</span>
                </li>
              ))}
            </ul>
            <a href={SITE.phoneHref} className="btn-gold px-7 py-4 text-[16px]">
              <Phone className="w-5 h-5" /> Call {SITE.phone}
            </a>
            <p className="text-[13px] text-white/55 mt-3">{SITE.hours} · Prefer to type? Use the form.</p>
          </div>

          <div className="text-ui-fg">
            <QuoteForm
              variant="short"
              loanType={page.loanType}
              program={page.program}
              formName={`lp:${page.slug}`}
              submitLabel={page.submitLabel}
            />
            {page.disclaimer && (
              <p className="text-[12px] leading-[1.55] text-white/60 mt-4">{page.disclaimer}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
