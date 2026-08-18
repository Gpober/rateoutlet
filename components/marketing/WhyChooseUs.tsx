import { Handshake, Zap, PiggyBank, HeartHandshake } from 'lucide-react'
import { Reveal } from './Reveal'

const FEATURES = [
  {
    icon: Handshake,
    title: 'A broker, not a bank',
    body: 'Banks sell one rate — theirs. We shop dozens of lenders and bring you the winner.',
  },
  {
    icon: Zap,
    title: 'Genuinely fast',
    body: '24-hour approvals and closings in as little as 14 days. No black holes, no runaround.',
  },
  {
    icon: PiggyBank,
    title: 'Zero hidden fees',
    body: 'Transparent pricing from the first call. What we quote is what you sign.',
  },
  {
    icon: HeartHandshake,
    title: 'One point of contact',
    body: 'A dedicated broker from application to keys — a real person who answers the phone.',
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
