import { Handshake, Zap, PiggyBank, HeartHandshake } from 'lucide-react'
import { Reveal } from './Reveal'

const FEATURES = [
  {
    icon: Handshake,
    title: 'Interest rates',
    body: 'We are The Rate Outlet. A broker, not a bank — we shop dozens of lenders so your rate is picked for you, not for us.',
  },
  {
    icon: Zap,
    title: 'Fast closings',
    body: 'Average closings in 14 to 21 days, while many lenders take 60 to 90 days on a simple purchase or refinance.',
  },
  {
    icon: HeartHandshake,
    title: 'Our 24-hour rule',
    body: 'We are always available to you: 24-hour approvals, same-day responses, and daily rate updates on your loan.',
  },
  {
    icon: PiggyBank,
    title: 'Closing clarity',
    body: 'No hidden fees. We make your costs clear up front — sleep well the night before your closing.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-section-muted">
      <div className="container-main">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Why The Rate Outlet</p>
          <h2 className="font-display text-[30px] md:text-[42px] leading-[1.1] tracking-[-0.02em] text-primary">
            The advantages of a broker who works for you
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="card h-full p-6 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-md bg-accent-soft flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-accent-deep" />
                </div>
                <h3 className="text-[17px] font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-[14px] leading-[1.6] text-ui-muted">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
