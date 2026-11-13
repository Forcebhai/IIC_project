/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        editorial: {
          warm: '#F8F7F3',
          navy: '#182538',
          yellow: '#FFD900',
          black: '#080808',
          grey: '#E8E6E0',
          slate: '#626978',
        },
        brand: {
          navy: '#050814',
          'navy-deep': '#03050C',
          'navy-card': '#0B132B',
          'navy-surface': '#101B38',
          charcoal: '#293747',
          silver: '#E9EAEB',
          grey: '#AEB3B8',
          'grey-light': '#D2D6DC',
          yellow: '#F4B51B',
          'yellow-light': '#F9D56E',
          'yellow-bright': '#FFC83B',
          'yellow-dark': '#C9910D',
          cyan: '#38BDF8',
          blue: '#3B82F6',
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'Anton', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Outfit', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
        alice: ['"Alice"', 'serif'],
        canva: ['"Canva Sans"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        times: ['"Times New Roman MT Bold"', '"Times New Roman"', 'Georgia', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(244, 181, 27, 0.3))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px rgba(244, 181, 27, 0.65))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

