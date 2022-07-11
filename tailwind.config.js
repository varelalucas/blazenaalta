/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0D0D0D',
          800: '#111111',
          700: '#202020'
        },
        red: {
          500: '#FF0C36'
        },
        yellow: {
          600: '#FFB800'
        }
      }
    }
  },
  plugins: []
}
