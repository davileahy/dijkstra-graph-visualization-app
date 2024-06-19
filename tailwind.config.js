/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'rowdies': ["Rowdies"],
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

