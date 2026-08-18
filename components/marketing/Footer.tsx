import Link from 'next/link'
import { Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import { SITE } from '@/lib/site'

const LOAN_LINKS = [
  { label: 'Buy a Home', href: '/loan-programs#purchase' },
  { label: 'Refinance', href: '/loan-programs#refinance' },
  { label: 'HELOC', href: '/loan-programs#heloc' },
  { label: 'Payment Calculator', href: '/calculator' },
]

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Loan Programs', href: '/loan-programs' },
  { label: 'Contact', href: '/contact' },
]

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="text-white">The </span>
      <span className="text-accent">Rate</span>
      <span className="text-white"> Outlet</span>
    </span>
  )
}

export function Footer() {
  return (
    <footer className="bg-section-dark text-white">
      {/* Main footer grid */}
      <div className="border-b border-white/10 py-14">
        <div className="container-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Wordmark className="text-[19px] font-bold block mb-3" />
            <p className="text-[13px] leading-[1.7] text-white/60 mb-5">
              South Florida&apos;s mortgage broker since {SITE.founded}. We shop dozens of
              lenders so you don&apos;t have to — and pass the savings to you.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 border border-white/15 rounded-md flex items-center justify-center text-white/60 hover:text-primary hover:bg-accent hover:border-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Loans */}
          <div>
            <p className="text-[12px] uppercase tracking-eyebrow font-semibold text-accent mb-4">Loans</p>
            <ul className="space-y-2.5">
              {LOAN_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[14px] text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[12px] uppercase tracking-eyebrow font-semibold text-accent mb-4">Company</p>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[14px] text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[12px] uppercase tracking-eyebrow font-semibold text-accent mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors break-all">
                  <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[14px] text-white/60">
                <Clock className="w-4 h-4 flex-shrink-0 text-accent" />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance block */}
      <div className="border-b border-white/10 py-8">
        <div className="container-main">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-8 h-8 border border-white/25 rounded flex items-center justify-center flex-shrink-0" title="Equal Housing Opportunity">
              <span className="text-white text-[9px] font-bold">EHO</span>
            </div>
            <span className="text-[12px] text-white/60 font-medium">Equal Housing Opportunity</span>
          </div>
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <p className="text-[12px] text-white/50 leading-[1.6]">
              <strong className="text-white/80">{SITE.name} · NMLS #{SITE.nmls}</strong> · {SITE.license}.
            </p>
            <p className="text-[12px] text-white/50 leading-[1.6]">
              MORTGAGE BROKER. We arrange, but do not make, mortgage loans. Loans are subject to credit
              approval. Programs, rates, and terms are subject to change without notice.
            </p>
            <p className="text-[12px] text-white/50">
              Verify our license at{' '}
              <a
                href="https://www.nmlsconsumeraccess.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                nmlsconsumeraccess.org
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-white/40">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
            <span className="text-white/20">·</span>
            <span>NMLS #{SITE.nmls}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
