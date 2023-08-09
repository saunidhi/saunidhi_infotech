/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '1536px',
        'custom-height-mq': { 'raw': '((min-width: 1024px) and (max-height: 830px))' },
      }
    },
    variants: {
      display:['group-hover']
     }
  },
  plugins: [],
}