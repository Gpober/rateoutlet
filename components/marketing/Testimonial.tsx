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
            “I tried to refinance twice before working with Gonzalo. No one could come close to
            his rate and deal. He is very professional and very willing to work with you. Would
            happily do business with him again.”
          </blockquote>
          <div>
            <p className="text-[16px] font-semibold text-primary">Kate Schadler</p>
            <p className="text-[14px] text-ui-muted">Miami, FL</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
