/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './app.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:'roboto'
      },
      colors:{
        priDarkGreen: 'hsl(120, 38%, 12%)',
        priDarkerGreen: 'hsl(113,33%,26%)',
        priLightGreen: 'hsl(92,45%,32%)',
        neuPeach: 'hsl(78,33%,50%)',
        neuBrown: 'hsl(65,78%,79%)'
      },
    },
  },
  plugins: [],
}

