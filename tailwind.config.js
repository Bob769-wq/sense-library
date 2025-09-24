/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'button-bg': 'rgb(135, 143, 151)',
        'button-hover': '#a1a8ae',
      },
      screens: {
        bigL: '992px',
      },
      spacing: {
        6.1: '25px',
        'header-height': '77px',
        cartSearch: '10vh',
      },
      maxWidth: {
        1000: '1000px',
        '6.5xl': '1200px',
        '8xl': '1400px',
        xxl: '1680px',
        logo: '130px',
        'f-logo': '180px',
        '2/5': '40%',
        '4/5': '80%',
      },
    },
  },
  plugins: [],
};
