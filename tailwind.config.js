/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0038A8',
        secondary: '#D4AF37',
        tertiary: '#F8F9FA',
        neutral: '#1A1A1A',
      },
      fontFamily: {
        headline: ['Newsreader', 'serif'],
        body: ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}