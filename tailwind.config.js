/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        bigL: '992px',
      },
      spacing: {
        6.1: '25px',
        header: '77px',
      },
      maxWidth: {
        '6.5xl': '1200px',
        '8xl': '1400px',
        xxl: '1680px',
        logo: '130px',
        '2/5': '40%',
      },
    },
  },
  plugins: [],
};
