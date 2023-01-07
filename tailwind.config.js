/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1366px',
      'last': '1760px',
    },
    extend: {
      boxShadow: {
        'bf': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' 
      },
      colors: {
        greyText: '#BEBEBE;'
      },
      fontFamily: {
        'syncopate': ['Syncopate', 'sans-serif'],
        'kyiv': ['KyivFont, sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
