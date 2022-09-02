/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    sans: ['Helvetica', 'Arial', 'sans-serif'],
    extend: {},
  },
  plugins: [require('daisyui')],
};
