import Link from 'next/link'
import { Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

const LOAN_LINKS = [
  { label: 'Buy A Home', href: '#loan-products' },
  { label: 'Refinance', href: '#loan-products' },
  { label: 'HELOC', href: '#loan-products' },
  { label: 'Reverse Mortgage', href: '#loan-products' },
  { label: "Today's Rates", href: '#rates' },
]

const COMPANY_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Loan Products', href: '#loan-products' },
  { label: 'Recent Closings', href: '#closings' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export function Footer() {
  return (
    <footer>
      {/* Top strip */}
      <div className="bg-white border-t border-ui-border py-6">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[20px] font-bold">
              <span className="text-primary">The </span>
              <span className="text-accent">Rate</span>
              <span className="text-primary"> Outlet</span>
            </span>
            <p className="text-[13px] text-ui-muted mt-0.5">South Florida&apos;s leading mortgage broker since 2010.</p>
          </div>
          <a href="#contact" className="btn-primary text-[14px] px-5 py-2.5">
            Free Quote
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="bg-section-muted border-t border-ui-border py-14">
        <div className="container-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Brand */}
          <div>
            <span className="text-[18px] font-bold block mb-2">
              <span className="text-primary">The </span>
              <span className="text-accent">Rate</span>
              <span className="text-primary"> Outlet</span>
            </span>
            <p className="text-[13px] leading-[1.65] text-ui-muted mb-5">
              South Florida&apos;s leading mortgage broker. NMLS #1017196.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-white border border-ui-border rounded-md flex items-center justify-center text-ui-muted hover:text-primary hover:border-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-white border border-ui-border rounded-md flex items-center justify-center text-ui-muted hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-white border border-ui-border rounded-md flex items-center justify-center text-ui-muted hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Loans */}
          <div>
            <p className="text-[12px] uppercase tracking-eyebrow font-semibold text-ui-fg mb-4">Loans</p>
            <ul className="space-y-2.5">
              {LOAN_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-ui-muted hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <p className="text-[12px] uppercase tracking-eyebrow font-semibold text-ui-fg mb-4">Company</p>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-ui-muted hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="text-[12px] uppercase tracking-eyebrow font-semibold text-ui-fg mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:3054409201"
                  className="flex items-center gap-2 text-[14px] text-ui-muted hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                  (305) 440-9201
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@therateoutlet.com"
                  className="flex items-center gap-2 text-[14px] text-ui-muted hover:text-primary transition-colors break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                  info@therateoutlet.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-[14px] text-ui-muted">
                <Clock className="w-4 h-4 flex-shrink-0 text-accent" />
                Mon–Fri, 9am–6pm ET
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance block */}
      <div className="bg-white border-t border-ui-border py-8">
        <div className="container-main">
          <div className="flex items-center gap-3 mb-4 justify-center">
            {/* Equal Housing placeholder */}
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center flex-shrink-0" title="Equal Housing Opportunity">
              <span className="text-white text-[10px] font-bold">EHO</span>
            </div>
            <span className="text-[12px] text-ui-muted font-medium">Equal Housing Opportunity</span>
          </div>

          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <p className="text-[12px] text-ui-muted leading-[1.6]">
              <strong className="text-ui-fg">The Rate Outlet · NMLS #1017196</strong> · Licensed in Florida.
            </p>
            <p className="text-[12px] text-ui-muted leading-[1.6]">
              MORTGAGE BROKER. We arrange, but do not make, mortgage loans.
              Loans are subject to credit approval. Programs, rates, and terms are subject to change without notice.
            </p>
            <p className="text-[12px] text-ui-muted">
              Verify our license at{' '}
              <a
                href="http://www.nmlsconsumeraccess.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.nmlsconsumeraccess.org
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-section-dark py-4">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-white/40">
          <p>© 2025 The Rate Outlet. All rights reserved.</p>
          <p>
            Powered by{' '}
            <span className="text-white/60 font-medium">954Marketing.com</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
