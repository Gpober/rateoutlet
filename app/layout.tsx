import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { AttributionTracker } from '@/components/marketing/Attribution'
import { SITE } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'The Rate Outlet — Competitive Mortgage Rates, Shopped Across Dozens of Lenders | NMLS #1017196',
    template: '%s | The Rate Outlet',
  },
  description:
    "South Florida's leading mortgage broker since 2010. 14–21 day closings, zero hidden fees, and rates we shop across dozens of lenders. 10,000+ clients served.",
  keywords:
    'mortgage broker, South Florida, home loan, refinance, HELOC, competitive mortgage rates, Miami mortgage, mortgage calculator',
  openGraph: {
    title: 'The Rate Outlet — Competitive Mortgage Rates, Shopped Across Dozens of Lenders',
    description:
      'Higher expectations. Competitive rates. Zero time wasted. Purchase, refinance, HELOC — we shop dozens of lenders for you.',
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'MortgageBroker'],
              name: SITE.name,
              description: "South Florida's leading mortgage broker since 2010.",
              url: SITE.url,
              telephone: SITE.phoneE164,
              email: SITE.email,
              foundingDate: String(SITE.founded),
              areaServed: 'South Florida',
              identifier: { '@type': 'PropertyValue', name: 'NMLS', value: SITE.nmls },
              aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '10000' },
            }),
          }}
        />
      </head>
      <body>
        <AttributionTracker />
        {children}
      </body>
    </html>
  )
}
