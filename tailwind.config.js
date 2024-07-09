/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        devlyGreen: '#0DA16C',
        devlyMint: '#EBFBEF',
        devlyWhite: '#F4FFFA',
      },
    },
    fontFamily: {
      'cascadia': ['Cascadia Mono', 'monospace'],
    },
  },
  plugins: [],
};