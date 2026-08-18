export type Program = {
  id: string
  name: string
  tagline: string
  description: string
  highlights: string[]
  featured?: boolean
}

export const PROGRAMS: Program[] = [
  {
    id: 'purchase',
    name: 'Buy a Home',
    tagline: 'Purchase loans',
    description:
      'From first-time buyer to move-up or investment property — we match you to the loan that fits, then shop it hard for the lowest rate.',
    highlights: [
      'Conventional, FHA, VA & jumbo',
      'Down payments as low as 3%',
      'First-time buyer programs',
      'Pre-approvals in 24 hours',
    ],
  },
  {
    id: 'refinance',
    name: 'Refinance',
    tagline: 'Lower your rate or payment',
    description:
      'Lower your rate, shorten your term, or tap equity with a cash-out refinance. We run the numbers so a refi only happens when it truly pays.',
    highlights: [
      'Rate-and-term & cash-out',
      'Drop your monthly payment',
      'Consolidate higher-interest debt',
      'No-obligation break-even analysis',
    ],
    featured: true,
  },
  {
    id: 'heloc',
    name: 'HELOC & Home Equity',
    tagline: 'Put your equity to work',
    description:
      'Access the equity you’ve built for renovations, tuition, or big goals — with flexible draw periods and competitive terms.',
    highlights: [
      'Flexible lines of credit',
      'Fixed-rate equity loans',
      'Fund renovations or projects',
      'Keep your low first-mortgage rate',
    ],
  },
]
