/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary_color: '#7286D3',
      secondary_color: '#19192C',
      border_color: 'rgb(209 213 219)'
    },
    fontFamily:{
      'popins': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage:{
        'back': "url('../public/image.svg')",
      }
    },
  },
  plugins: [],
}
