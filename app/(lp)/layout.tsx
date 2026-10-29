import { Phone } from 'lucide-react'
import { SITE } from '@/lib/site'
import { ComplianceBlock } from '@/components/marketing/Compliance'

// Minimal chrome for campaign landing pages: logo + phone only, no main nav,
// and the full compliance footer.
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-white border-b border-ui-border">
        <div className="container-main h-[68px] flex items-center justify-between gap-4">
          <span className="font-bold tracking-tight text-[20px] md:text-[22px]">
            <span className="text-primary">The </span>
            <span className="text-accent-deep">Rate</span>
            <span className="text-primary"> Outlet</span>
          </span>
          <a href={SITE.phoneHref} className="btn-primary h-10 px-4 md:px-5 text-[14px]">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{SITE.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-section-dark text-white py-8">
        <ComplianceBlock />
        <p className="text-center text-[12px] text-white/40 mt-6">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </footer>
    </>
  )
}
