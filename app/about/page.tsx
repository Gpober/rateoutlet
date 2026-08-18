import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { PageHeader } from '@/components/marketing/PageHeader'
import { CtaBand } from '@/components/marketing/CtaBand'
import { Reveal } from '@/components/marketing/Reveal'
import { SITE } from '@/lib/site'
import closings from '@/data/recent-closings.json'

export const metadata = {
  title: 'About Us',
  description:
    'The Rate Outlet has been South Florida’s trusted mortgage broker since 2010 — 10,000+ families financed with lower rates and honest guidance.',
}

const VALUES = [
  { title: 'Your side of the table', body: 'As a broker we answer to you, not a bank’s rate sheet. Your best deal is our only job.' },
  { title: 'Straight talk', body: 'Clear numbers, honest advice, and a recommendation to wait when that’s the right call.' },
  { title: 'Local expertise', body: 'Condos, HOAs, flood zones, jumbo — we know the quirks of financing in South Florida.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="South Florida’s mortgage broker since 2010"
        subtitle="We started The Rate Outlet on a simple idea: borrowers deserve a pro who shops the whole market for them — and tells them the truth."
      />

      {/* Story */}
      <section className="section-pad">
        <div className="container-main grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="font-display text-[30px] md:text-[38px] leading-[1.12] tracking-[-0.02em] text-primary mb-5">
              10,000+ families financed — one honest deal at a time
            </h2>
            <div className="space-y-4 text-[15px] leading-[1.7] text-ui-muted">
              <p>
                Since {SITE.founded}, we&apos;ve helped South Floridians buy their first homes, refinance
                into lower payments, and put their equity to work. As a broker, we compare dozens of
                lenders on every file — so you get a rate no single bank can match.
              </p>
              <p>
                No call-center runaround, no surprise fees at closing. Just one dedicated broker who
                picks up the phone, explains every number, and gets you to the closing table fast.
              </p>
            </div>
            <Link href="/contact" className="btn-primary px-6 py-3 text-[14px] mt-7">
              Work with us <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '10,000+', label: 'Families financed' },
                { value: '15 yrs', label: 'In business' },
                { value: '5.0★', label: 'Average rating' },
                { value: '14 days', label: 'Fastest close' },
              ].map((s) => (
                <div key={s.label} className="card p-6 text-center">
                  <p className="font-display text-[32px] text-primary leading-none">{s.value}</p>
                  <p className="text-[13px] text-ui-muted mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-section-muted">
        <div className="container-main">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">What we stand for</p>
            <h2 className="font-display text-[30px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-primary">
              The values behind every closing
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card h-full p-7 border-t-2 border-t-accent">
                  <h3 className="text-[18px] font-semibold text-primary mb-2">{v.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-ui-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent closings */}
      <section className="section-pad">
        <div className="container-main">
          <Reveal className="max-w-2xl mb-10">
            <p className="eyebrow mb-4">Recent closings</p>
            <h2 className="font-display text-[30px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-primary">
              Real loans, recently closed
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {closings.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <p className="font-display text-[24px] text-primary leading-none mb-3">{c.loanAmount}</p>
                  <p className="text-[14px] font-medium text-ui-fg">{c.propertyType}</p>
                  <p className="flex items-center gap-1.5 text-[13px] text-ui-muted mt-2">
                    <MapPin className="w-3.5 h-3.5 text-accent-deep" />
                    {c.location}
                  </p>
                  <p className="text-[12px] uppercase tracking-eyebrow text-accent-deep font-semibold mt-4">
                    {c.term}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
