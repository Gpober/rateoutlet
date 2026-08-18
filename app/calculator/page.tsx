import { PageHeader } from '@/components/marketing/PageHeader'
import { MortgageCalculator } from '@/components/marketing/MortgageCalculator'
import { CtaBand } from '@/components/marketing/CtaBand'

export const metadata = {
  title: 'Mortgage Payment Calculator',
  description:
    'Estimate your monthly mortgage payment — principal, interest, taxes, and insurance — with The Rate Outlet’s free South Florida payment calculator.',
}

export default function CalculatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Tool"
        title="Mortgage payment calculator"
        subtitle="Move the sliders to see how price, down payment, rate, and term shape your monthly payment. Then let us shop dozens of lenders to beat the rate you plugged in."
      />
      <section className="section-pad">
        <div className="container-main">
          <MortgageCalculator />
        </div>
      </section>
      <CtaBand
        heading="Like what you see? Let’s make it real."
        sub="Calculators use round numbers — we use your numbers. Get a personalized quote with no impact on your credit."
      />
    </>
  )
}
