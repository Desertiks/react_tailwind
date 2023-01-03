/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // 'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1366px',
      'last': '1760px',
    },
    extend: {
      colors: {
        greyText: '#BEBEBE;'
      },
      fontFamily: {
        'syncopate': ['Syncopate', 'sans-serif'],
        'kyiv': ['KyivFont, sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
