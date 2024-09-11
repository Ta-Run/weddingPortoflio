
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {
      colors: {
        black: '#000000',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}