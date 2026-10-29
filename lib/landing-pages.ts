// Campaign landing pages served at /lp/[slug] for paid, social and email traffic.
// Add or edit a page here — the route, metadata and static params are generated
// from this list. Keep copy free of specific rates, APRs, payments, down-payment
// amounts and unverified numbers.

import type { LoanType } from '@/components/marketing/QuoteForm'

export type LandingPage = {
  slug: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  headline: string
  sub: string
  bullets: [string, string, string]
  /** Preset loan type; hides the selector on the short form. */
  loanType?: LoanType
  /** Campaign program context sent with the lead (e.g. "FHA"). */
  program?: string
  submitLabel: string
  /** Extra page-specific disclaimer shown under the form. */
  disclaimer?: string
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'start',
    metaTitle: 'Get Your Mortgage Options',
    metaDescription: 'Tell us your goal and a licensed Florida mortgage broker will shop dozens of lenders for you.',
    eyebrow: 'Free mortgage quote',
    headline: 'Your mortgage options, shopped for you.',
    sub: 'Tell us what you’re after. A licensed broker compares lenders and comes back with real numbers — no cost, no obligation.',
    bullets: [
      'A broker who works for you, not for one bank',
      'Dozens of lenders compared on your file',
      'Getting a quote has no impact on your credit',
    ],
    submitLabel: 'Get My Options',
  },
  {
    slug: 'first-time-buyers',
    metaTitle: 'First-Time Home Buyers',
    metaDescription: 'Buying your first home in Florida? Get plain-English guidance and a pre-approval from a licensed mortgage broker.',
    eyebrow: 'First-time buyers',
    headline: 'Buying your first home? Start here.',
    sub: 'We walk you through every step — what you qualify for, which programs fit, and what to expect at closing.',
    bullets: [
      'Plain-English guidance from pre-approval to keys',
      'First-time buyer and low-down-payment programs reviewed for you',
      'A pre-approval letter that helps your offer stand out',
    ],
    loanType: 'Purchase',
    program: 'First-time buyer',
    submitLabel: 'Start My Pre-Approval',
  },
  {
    slug: 'fha',
    metaTitle: 'FHA Loans',
    metaDescription: 'See if an FHA loan fits your home purchase or refinance. Talk to a licensed Florida mortgage broker.',
    eyebrow: 'FHA loans',
    headline: 'FHA loans, made simple.',
    sub: 'FHA financing can open the door when credit or savings aren’t perfect. We’ll tell you quickly whether it’s your best fit.',
    bullets: [
      'More flexible credit guidelines than many conventional loans',
      'Lower down payment options',
      'We handle the paperwork and condo-approval questions',
    ],
    program: 'FHA',
    submitLabel: 'Check My FHA Options',
    disclaimer:
      'The Rate Outlet is not affiliated with or acting on behalf of HUD, FHA or any government agency.',
  },
  {
    slug: 'va',
    metaTitle: 'VA Home Loans',
    metaDescription: 'VA home loans for eligible veterans, service members and surviving spouses, from a licensed Florida mortgage broker.',
    eyebrow: 'VA home loans',
    headline: 'You served. Let’s get you home.',
    sub: 'VA loans are one of the strongest benefits you’ve earned. We help you use it — from eligibility to closing.',
    bullets: [
      'For eligible veterans, service members and surviving spouses',
      'No private mortgage insurance on VA loans',
      'Help getting your Certificate of Eligibility',
    ],
    program: 'VA',
    submitLabel: 'Check My VA Options',
    disclaimer:
      'The Rate Outlet is not affiliated with or endorsed by the U.S. Department of Veterans Affairs or any government agency. VA eligibility and funding fee requirements apply.',
  },
  {
    slug: 'refinance',
    metaTitle: 'Refinance',
    metaDescription: 'Find out whether a refinance actually pays for you, with an honest break-even review from a licensed Florida broker.',
    eyebrow: 'Refinance',
    headline: 'See if a refinance actually pays.',
    sub: 'We run the numbers on your loan and show you the break-even — before you spend a dollar.',
    bullets: [
      'An honest break-even review before you commit',
      'Rate-and-term and cash-out options compared',
      'If waiting is the smarter move, we’ll tell you',
    ],
    loanType: 'Refinance',
    submitLabel: 'Review My Refinance',
  },
  {
    slug: 'heloc',
    metaTitle: 'HELOC & Home Equity',
    metaDescription: 'Tap your home equity with a HELOC or fixed-rate equity loan. Talk to a licensed Florida mortgage broker.',
    eyebrow: 'HELOC & home equity',
    headline: 'Put your home equity to work.',
    sub: 'Renovations, tuition, consolidating debt — access the equity you’ve built without starting your mortgage over.',
    bullets: [
      'Keep your current first mortgage in place',
      'Lines of credit and fixed-rate equity loans compared',
      'Clear terms explained before you sign anything',
    ],
    loanType: 'HELOC',
    submitLabel: 'Check My Equity Options',
  },
]

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug)
}
