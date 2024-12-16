/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '40': '5rem', // mb-40のmargin-bottomを5remに設定
      },
    },
  },
  plugins: [],
};