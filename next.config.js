/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Addresses from the old WordPress site (therateoutlet.com), so links and
  // Google results that point at them land on the matching page here.
  async redirects() {
    return [
      { source: '/our-loan-products', destination: '/loan-programs', permanent: true },
      { source: '/todays-rates', destination: '/calculator', permanent: true },
      { source: '/case-study/refinance-with-the-rate-outlet', destination: '/lp/refinance', permanent: true },
      { source: '/case-study/buy-a-house-with-the-rate-outlet', destination: '/lp/first-time-buyers', permanent: true },
      { source: '/case-study', destination: '/loan-programs', permanent: true },
      { source: '/faq-items/:path*', destination: '/', permanent: true },
      { source: '/portfolio_category/:path*', destination: '/', permanent: true },
      { source: '/portfolio-items/:path*', destination: '/', permanent: true },
      { source: '/element_category/:path*', destination: '/', permanent: true },
      { source: '/fusion_tb_category/:path*', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/sitemap_index.xml', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: false },
      { source: '/wp-login.php', destination: '/', permanent: false },
    ]
  },
}

module.exports = nextConfig
