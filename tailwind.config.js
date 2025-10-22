/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1280px',
    },
    extend: {
      colors: {
        // Exact Benji.app color system
        background: '#ffffff',
        foreground: '#000000',
        accent: '#21b30b', // Exact benji.app green
        'accent-hover': '#1a9609',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fragment Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '95%', letterSpacing: '-0.03em' }],
        'hero-mobile': ['42px', { lineHeight: '95%', letterSpacing: '-0.03em' }],
      },
      spacing: {
        'section-y': '120px',
        'section-y-mobile': '80px',
        '30': '120px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}
