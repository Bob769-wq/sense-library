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
        'screen-min-w-992': '992px',
      },
      spacing: {
        25: '25px',
        'header-height': '77px',
      },
      maxWidth: {
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
        1680: '1680px',
        'header-logo-width': '8.125rem',
        'footer-logo-width': '11.25rem',
        '40%': '40%',
        '80%': '80%',
      },
    },
  },
  plugins: [],
};
