import { Hero } from '@/components/marketing/Hero'
import { TrustBar } from '@/components/marketing/TrustBar'
import { WhyChooseUs } from '@/components/marketing/WhyChooseUs'
import { ProgramsPreview } from '@/components/marketing/ProgramsPreview'
import { Testimonial } from '@/components/marketing/Testimonial'
import { CtaBand } from '@/components/marketing/CtaBand'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProgramsPreview />
      <WhyChooseUs />
      <Testimonial />
      <CtaBand />
    </>
  )
}
