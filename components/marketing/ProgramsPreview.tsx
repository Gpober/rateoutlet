import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PROGRAMS } from '@/lib/programs'
import { Reveal } from './Reveal'
import { cn } from '@/lib/utils'

export function ProgramsPreview() {
  return (
    <section className="section-pad">
      <div className="container-main">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Loan Programs</p>
          <h2 className="font-display text-[30px] md:text-[42px] leading-[1.1] tracking-[-0.02em] text-primary">
            One broker. Every kind of loan.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <div
                className={cn(
                  'h-full rounded-lg p-7 border flex flex-col transition-all duration-300',
                  p.featured
                    ? 'bg-primary text-white border-primary shadow-lift'
                    : 'card hover:shadow-lift hover:-translate-y-1'
                )}
              >
                <p
                  className={cn(
                    'text-[12px] uppercase tracking-eyebrow font-semibold mb-2',
                    p.featured ? 'text-accent' : 'text-accent-deep'
                  )}
                >
                  {p.tagline}
                </p>
                <h3
                  className={cn(
                    'font-display text-[24px] mb-3',
                    p.featured ? 'text-white' : 'text-primary'
                  )}
                >
                  {p.name}
                </h3>
                <p className={cn('text-[14px] leading-[1.6] mb-5', p.featured ? 'text-white/70' : 'text-ui-muted')}>
                  {p.description}
                </p>
                <ul className="space-y-2.5 mb-7">
                  {p.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[14px]">
                      <Check className={cn('w-4 h-4 mt-0.5 flex-shrink-0', p.featured ? 'text-accent' : 'text-accent-deep')} />
                      <span className={p.featured ? 'text-white/80' : 'text-ui-fg'}>{h}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/loan-programs#${p.id}`}
                  className={cn(
                    'mt-auto inline-flex items-center gap-1.5 text-[14px] font-semibold transition-colors',
                    p.featured ? 'text-accent hover:text-white' : 'text-primary hover:text-accent-deep'
                  )}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
