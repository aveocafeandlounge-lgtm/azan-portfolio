/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#101B32',
          light: '#1A2B4A',
        },
        gold: {
          DEFAULT: '#C6A45C',
          light: '#D4B870',
          dark: '#A88A45',
        },
        blue: {
          DEFAULT: '#5477A8',
          light: '#6B8FB8',
          dark: '#435E85',
        },
        grey: {
          soft: '#F4F6FA',
          medium: '#E2E8F0',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
