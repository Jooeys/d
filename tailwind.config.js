/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'debond': '#323066',
      'debondLine': '#403af4',
      'highlight': {
        '2': '#4d0eff',
      },
      ...colors,
    },
    extend: {
      spacing: {
        '13': '3.25rem',
        '14': '3.5rem',
        '17': '4.25rem',
        '26': '6.5rem',
      }
    },
    fontFamily: {
      'Inter': ['Inter', 'ui-sans-serif', 'system-ui']
    },
  },
  plugins: [],
}
