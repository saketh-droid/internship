/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,tsx, css}', // For React/JSX
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#3F526E',
        'custom-white': '#E9EDF1',
      },
      fontFamily: {
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

