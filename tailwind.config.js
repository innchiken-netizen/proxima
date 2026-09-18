/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        proxima: {
          brown: '#3A2318',
          'brown-deep': '#251409',
          'brown-light': '#C9A87C',
          'brown-pale': '#EADCC8',
          black: '#14100D',
          white: '#FFFFFF',
          cream: '#F8F3EC',
          red: '#A32B1E',
          'red-hi': '#BE3423',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Work Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(37, 20, 9, 0.12)',
        'luxury-lg': '0 30px 60px -20px rgba(37, 20, 9, 0.22)',
      },
    },
  },
  plugins: [],
}
