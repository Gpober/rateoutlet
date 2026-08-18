import { Star, Quote } from 'lucide-react'
import { Reveal } from './Reveal'

export function Testimonial() {
  return (
    <section className="section-pad bg-section-muted">
      <div className="container-main">
        <Reveal className="max-w-3xl mx-auto text-center">
          <Quote className="w-10 h-10 text-accent mx-auto mb-6" />
          <div className="flex items-center justify-center gap-1 text-accent mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <blockquote className="font-display text-[24px] md:text-[30px] leading-[1.35] tracking-[-0.01em] text-primary mb-8">
            “They found us a rate a full point below what our bank offered, explained every
            number, and closed in under three weeks. It genuinely felt like they were on our
            side the whole way.”
          </blockquote>
          <div>
            <p className="text-[16px] font-semibold text-primary">Kate Schadler</p>
            <p className="text-[14px] text-ui-muted">Homeowner · Fort Lauderdale, FL</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
