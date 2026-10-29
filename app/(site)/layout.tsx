import { Header } from '@/components/marketing/Header'
import { Footer } from '@/components/marketing/Footer'

// Full-site chrome: main nav header + footer. Campaign landing pages under
// app/(lp) use their own minimal layout instead.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[72px] md:pt-[108px]">{children}</main>
      <Footer />
    </>
  )
}
