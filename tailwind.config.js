/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B2F66',
          hover: '#08234E',
        },
        accent: {
          DEFAULT: '#D32F2F',
          hover: '#B71C1C',
          soft: '#FDECEC',
        },
        section: {
          muted: '#F5F7FA',
          dark: '#0B1F3A',
        },
        ui: {
          border: '#E2E8F0',
          fg: '#0F172A',
          muted: '#475569',
        },
        success: '#16A34A',
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '22px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(11, 31, 58, 0.06)',
        lift: '0 12px 40px rgba(11, 31, 58, 0.12)',
      },
      maxWidth: {
        container: '1200px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.14em',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up': 'accordion-up 0.25s ease-out',
      },
    },
  },
  plugins: [],
}
