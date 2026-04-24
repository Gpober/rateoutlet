import { Header } from '@/components/marketing/Header'
import { Hero } from '@/components/marketing/Hero'
import { StatStrip } from '@/components/marketing/StatStrip'
import { TaglineBand } from '@/components/marketing/TaglineBand'
import { WhyChooseUs } from '@/components/marketing/WhyChooseUs'
import { About } from '@/components/marketing/About'
import { LoanProducts } from '@/components/marketing/LoanProducts'
import { FastClose } from '@/components/marketing/FastClose'
import { RecentClosings } from '@/components/marketing/RecentClosings'
import { TestimonialBand } from '@/components/marketing/TestimonialBand'
import { SocialProofBand } from '@/components/marketing/SocialProofBand'
import { FAQAccordion } from '@/components/marketing/FAQAccordion'
import { QuoteFormCard } from '@/components/marketing/QuoteFormCard'
import { CtaBanner } from '@/components/marketing/CtaBanner'
import { Footer } from '@/components/marketing/Footer'

export const metadata = {
  title: 'The Rate Outlet — Lowest Mortgage Rates in South Florida | NMLS #1017196',
  description:
    "South Florida's leading mortgage broker since 2010. 14–21 day closings, zero hidden fees, rates from 3%. 10,000+ clients served. Get a free quote today.",
  openGraph: {
    title: 'The Rate Outlet — Lowest Mortgage Rates in South Florida',
    description:
      'Higher expectations. Lowest mortgage rates. Zero time wasted. Purchase, refinance, HELOC — we shop it for you.',
    url: 'https://therateoutlet.com',
    siteName: 'The Rate Outlet',
    locale: 'en_US',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Section 2: Sticky header with utility bar */}
      <Header />

      <main>
        {/* Section 3: Hero — three-line display headline, floating stat cards */}
        <Hero />

        {/* Section 4: Trust band — 4 stat tiles */}
        <StatStrip />

        {/* Section 5: Tagline band */}
        <TaglineBand />

        {/* Section 6: Why Choose Us — image + 2×2 feature grid */}
        <WhyChooseUs />

        {/* Section 7: About Us — image left, copy right */}
        <About />

        {/* Section 8: Loan Products — 3 cards, middle highlighted */}
        <LoanProducts />

        {/* Section 9: Fast Close — checklist + image */}
        <FastClose />

        {/* Section 10: Recent Closings — data from data/recent-closings.json */}
        <RecentClosings />

        {/* Section 11: Testimonial — Kate Schadler */}
        <TestimonialBand />

        {/* Section 12: Social proof stat band */}
        <SocialProofBand />

        {/* Section 13: FAQ accordion — sticky left column */}
        <FAQAccordion />

        {/* Section 14: Contact / quote form card */}
        <QuoteFormCard />

        {/* Section 15: Dark navy CTA banner */}
        <CtaBanner />
      </main>

      {/* Section 16: Footer */}
      <Footer />
    </>
  )
}
