const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },
      colors: {
        'gray-1000': '#050505',
        gray: colors.neutral,
      },
    },
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
    boxShadow: {
      'outline-normal': '0 0 0 2px var(--accent-2)',
      magical:
        'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
    },
    lineHeight: {
      'extra-loose': '2.2',
    },
    scale: {
      120: '1.2',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}