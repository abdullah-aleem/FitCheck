/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "custom":"500px"
      },
      colors:{
        "custom-white":"#eaeeef"
      }
    },
  },
  plugins: [],
}

