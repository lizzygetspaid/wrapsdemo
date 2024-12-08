/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#D4AF37',
          600: '#C19B2C',
        }
      }
    },
  },
  plugins: [],
};