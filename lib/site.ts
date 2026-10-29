// Central site configuration — copy, contact details, and navigation.
export const SITE = {
  name: 'The Rate Outlet',
  // Canonical production origin (no trailing slash). Used for metadataBase,
  // Open Graph, JSON-LD, sitemap and robots.
  url: 'https://therateoutletmortgage.com',
  nmls: '1017196',
  nmlsUrl: 'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1017196',
  phone: '(305) 440-9201',
  phoneHref: 'tel:3054409201',
  phoneE164: '+13054409201',
  // Single place to change the public contact address.
  email: 'info@therateoutlet.com',
  hours: 'Mon–Fri, 9am–6pm ET',
  founded: 2010,
  license: 'Licensed in Florida',
  regulator: 'Licensed by the Florida Office of Financial Regulation',
  notCommitment:
    'This is not a commitment to lend. All loans subject to credit approval and underwriting.',
}

export const NAV_LINKS = [
  { label: 'Loan Programs', href: '/loan-programs' },
  { label: 'Calculator', href: '/calculator' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
