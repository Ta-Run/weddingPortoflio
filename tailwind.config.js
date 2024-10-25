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
      screens: {
        'lg': '1277px', // Custom breakpoint for screens less than 1277px
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}