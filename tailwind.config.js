// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
      gridTemplateColumns: {
        aboutMe: 'auto 1fr',
      },
      colors: {
        secondary: colors.cyan,
        background: colors.zinc,
        primary: colors.orange,
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
};
