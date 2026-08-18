import Link from 'next/link'
import { Check, ArrowRight, FileText, Search, KeyRound } from 'lucide-react'
import { PageHeader } from '@/components/marketing/PageHeader'
import { CtaBand } from '@/components/marketing/CtaBand'
import { Reveal } from '@/components/marketing/Reveal'
import { PROGRAMS } from '@/lib/programs'

export const metadata = {
  title: 'Loan Programs — Purchase, Refinance & HELOC',
  description:
    'Explore The Rate Outlet’s mortgage programs: home purchase loans, refinancing, and HELOCs — all shopped across dozens of lenders for the lowest rate.',
}

const STEPS = [
  { icon: FileText, title: 'Tell us your goal', body: 'A quick call or form — no credit pull, no pressure. We learn what you’re after.' },
  { icon: Search, title: 'We shop it for you', body: 'We compare dozens of lenders and bring back the best rate and structure for your situation.' },
  { icon: KeyRound, title: 'Close and get keys', body: 'One broker guides you to the closing table — often in as little as 14 days.' },
]

export default function LoanProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Loan Programs"
        title="Find the loan that fits — then the rate that wins"
        subtitle="Whether you’re buying, refinancing, or tapping equity, we match you to the right program and shop it across dozens of lenders."
      />

      {/* Program detail cards */}
      <section className="section-pad">
        <div className="container-main space-y-5">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <div
                id={p.id}
                className="scroll-mt-28 card p-7 md:p-9 grid md:grid-cols-[1fr_1fr] gap-8 items-center"
              >
                <div>
                  <p className="eyebrow mb-3">{p.tagline}</p>
                  <h2 className="font-display text-[28px] md:text-[32px] text-primary mb-3 tracking-[-0.01em]">
                    {p.name}
                  </h2>
                  <p className="text-[15px] leading-[1.65] text-ui-muted mb-6">{p.description}</p>
                  <Link href="/contact" className="btn-primary px-6 py-3 text-[14px]">
                    Get started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 rounded-md bg-section-muted px-4 py-3">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-deep" />
                      <span className="text-[14px] text-ui-fg">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-section-muted">
        <div className="container-main">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="font-display text-[30px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-primary">
              Three simple steps to a lower rate
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="card h-full p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-md bg-accent-soft flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-accent-deep" />
                    </div>
                    <span className="font-display text-[24px] text-accent-deep">0{i + 1}</span>
                  </div>
                  <h3 className="text-[17px] font-semibold text-primary mb-2">{s.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-ui-muted">{s.body}</p>
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
