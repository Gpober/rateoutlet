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
          DEFAULT: '#0A2540', // deep navy
          hover: '#06192E',
          light: '#123A63',
        },
        accent: {
          DEFAULT: '#C6A15B', // gold
          hover: '#AC863E',
          soft: '#F6EFDF',
          deep: '#8A6D2E',
        },
        section: {
          muted: '#F6F7F9',
          dark: '#081B33',
        },
        ui: {
          border: '#E4E8ED',
          fg: '#0E1B2A',
          muted: '#5A6B7B',
        },
        success: '#15803D',
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '22px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(10, 37, 64, 0.06)',
        lift: '0 18px 50px rgba(10, 37, 64, 0.14)',
        gold: '0 10px 30px rgba(198, 161, 91, 0.28)',
      },
      maxWidth: {
        container: '1200px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.16em',
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
