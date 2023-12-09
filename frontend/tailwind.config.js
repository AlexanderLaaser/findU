/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {
      colors: {
      'company-color': '#EC4F46',
      'company-color-light': '#EE9187',
      'company-color-super-light': '#FFF1F3',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}


