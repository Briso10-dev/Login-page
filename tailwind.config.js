/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary_color: '#7286D3',
      secondary_color: '#FFF2F2'
    },
    extend: {
      backgroundImage:{
        'back': "url('../public/image.svg')",
      }
    },
  },
  plugins: [],
}
