import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/marketing/Header'
import { Footer } from '@/components/marketing/Footer'

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
  metadataBase: new URL('https://therateoutlet.com'),
  title: {
    default: 'The Rate Outlet — Lowest Mortgage Rates in South Florida | NMLS #1017196',
    template: '%s | The Rate Outlet',
  },
  description:
    "South Florida's leading mortgage broker since 2010. 14–21 day closings, zero hidden fees, and rates we shop across dozens of lenders. 10,000+ clients served.",
  keywords:
    'mortgage broker, South Florida, home loan, refinance, HELOC, lowest mortgage rates, Miami mortgage, mortgage calculator',
  openGraph: {
    title: 'The Rate Outlet — Lowest Mortgage Rates in South Florida',
    description:
      'Higher expectations. Lower rates. Zero time wasted. Purchase, refinance, HELOC — we shop dozens of lenders for you.',
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
      <body>
        <Header />
        <main className="pt-[72px] md:pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
