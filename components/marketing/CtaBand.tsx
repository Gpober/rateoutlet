import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { SITE } from '@/lib/site'

export function CtaBand({
  heading = 'Ready to see how much you could save?',
  sub = 'Get a personalized quote in minutes — no cost, no obligation, and no impact on your credit.',
}: {
  heading?: string
  sub?: string
}) {
  return (
    <section className="section-pad">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-lg bg-primary px-8 py-14 md:px-16 md:py-16 text-center">
          {/* Gold glow accents */}
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-[30px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-white mb-4">
              {heading}
            </h2>
            <p className="text-[16px] leading-[1.65] text-white/70 mb-8">{sub}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-gold px-7 py-3.5 text-[15px]">
                Get My Rate <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={SITE.phoneHref} className="btn-outline-white px-7 py-3.5 text-[15px]">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
