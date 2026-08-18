import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react'
import { PageHeader } from '@/components/marketing/PageHeader'
import { QuoteForm } from '@/components/marketing/QuoteForm'
import { SITE } from '@/lib/site'

export const metadata = {
  title: 'Contact & Free Quote',
  description:
    'Get a free, no-obligation mortgage quote from The Rate Outlet. Call (305) 440-9201 or request your personalized rate online.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Quote"
        title="Let’s find your best rate"
        subtitle="Tell us a little about your goal and a broker will follow up with real numbers — no cost, no obligation, no credit impact."
      />

      <section className="section-pad">
        <div className="container-main grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          {/* Contact info */}
          <div>
            <h2 className="font-display text-[26px] text-primary mb-6">Talk to a real broker</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-md bg-accent-soft flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent-deep" />
                </div>
                <div>
                  <p className="text-[13px] text-ui-muted">Call or text</p>
                  <a href={SITE.phoneHref} className="text-[16px] font-semibold text-primary hover:text-accent-deep transition-colors">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-md bg-accent-soft flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent-deep" />
                </div>
                <div>
                  <p className="text-[13px] text-ui-muted">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-[16px] font-semibold text-primary hover:text-accent-deep transition-colors break-all">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-md bg-accent-soft flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent-deep" />
                </div>
                <div>
                  <p className="text-[13px] text-ui-muted">Hours</p>
                  <p className="text-[16px] font-semibold text-primary">{SITE.hours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-lg bg-section-muted border border-ui-border p-6">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-accent-deep" />
                <p className="text-[15px] font-semibold text-primary">No pressure, ever</p>
              </div>
              <p className="text-[14px] leading-[1.6] text-ui-muted">
                A quote is just information. We&apos;ll show you the numbers and let you decide — even if
                the answer is “not yet.”
              </p>
              <p className="text-[12px] text-ui-muted mt-4">NMLS #{SITE.nmls} · {SITE.license}</p>
            </div>
          </div>

          {/* Form */}
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
