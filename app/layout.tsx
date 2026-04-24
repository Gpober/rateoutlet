import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

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
  title: 'The Rate Outlet — Lowest Mortgage Rates in South Florida | NMLS #1017196',
  description:
    "South Florida's leading mortgage broker since 2010. 14–21 day closings, zero hidden fees, rates from 3%. 10,000+ clients served. Get a free quote today.",
  keywords: 'mortgage broker, South Florida, home loan, refinance, HELOC, lowest mortgage rates, Miami mortgage',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'MortgageBroker'],
              name: 'The Rate Outlet',
              description: "South Florida's leading mortgage broker since 2010.",
              url: 'https://therateoutlet.com',
              telephone: '+13054409201',
              email: 'info@therateoutlet.com',
              foundingDate: '2010',
              areaServed: 'South Florida',
              identifier: { '@type': 'PropertyValue', name: 'NMLS', value: '1017196' },
              aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '10000' },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
