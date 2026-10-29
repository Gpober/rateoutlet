import { CalendarCheck, PhoneCall, BellRing, Languages, Phone } from 'lucide-react'
import { PageHeader } from '@/components/marketing/PageHeader'
import { Reveal } from '@/components/marketing/Reveal'
import { RealtorForm } from '@/components/marketing/RealtorForm'
import { SITE } from '@/lib/site'

export const metadata = {
  title: 'Realtor Partners',
  description:
    'A Florida mortgage broker built to protect your closings: a direct line to the owner, proactive updates for you and your buyers, and bilingual service.',
}

const PILLARS = [
  {
    icon: CalendarCheck,
    title: 'Closings that hold',
    body: 'We review files up front, flag issues early, and push conditions hard so your closing date doesn’t slip and your deal doesn’t fall apart at the finish line.',
  },
  {
    icon: PhoneCall,
    title: 'A direct line to Gonzo',
    body: 'You work directly with the owner, not a call center or a ticket queue. When something comes up, you talk to the person who can fix it.',
  },
  {
    icon: BellRing,
    title: 'Your buyers stay in the loop',
    body: 'We update you and your buyer at every milestone — application, appraisal, approval, clear to close — so nobody is left guessing.',
  },
  {
    icon: Languages,
    title: 'Bilingual service',
    body: 'We work with your clients in English or Spanish, so families can ask questions and understand every document in the language they’re most comfortable with.',
  },
]

export default function RealtorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Real Estate Agents"
        title="A lender partner that protects your deals"
        subtitle="Your reputation rides on every closing. We treat your buyers like our own — fast answers, straight talk, and no surprises at the closing table."
      />

      <section className="section-pad">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 gap-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="card h-full p-7">
                  <div className="w-12 h-12 rounded-md bg-accent-soft flex items-center justify-center mb-5">
                    <p.icon className="w-6 h-6 text-accent-deep" />
                  </div>
                  <h2 className="text-[18px] font-semibold text-primary mb-2">{p.title}</h2>
                  <p className="text-[14px] leading-[1.65] text-ui-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="partner" className="section-pad bg-section-muted scroll-mt-28">
        <div className="container-main grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <div>
            <p className="eyebrow mb-4">Partner with us</p>
            <h2 className="font-display text-[30px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-primary mb-5">
              Let’s close more deals together
            </h2>
            <p className="text-[15px] leading-[1.7] text-ui-muted mb-6">
              Tell us a little about you and where you work. Gonzo will reach out personally to set up a
              quick intro — how you like to communicate, what your buyers need, and how we can make your
              next closing smoother.
            </p>
            <a href={SITE.phoneHref} className="btn-primary px-6 py-3 text-[14px]">
              <Phone className="w-4 h-4" /> Or call {SITE.phone}
            </a>
            <p className="text-[12px] leading-[1.6] text-ui-muted mt-8">
              Our partnerships are built on service. In line with RESPA, we don’t pay or accept referral
              fees or anything of value for referrals.
            </p>
          </div>
          <RealtorForm />
        </div>
      </section>
    </>
  )
}
