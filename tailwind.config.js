/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#051E1E',
        customTeal: '#18CDCD',
        customOrange: '#D73D00',
      },
    },
  },
  plugins: [],
};