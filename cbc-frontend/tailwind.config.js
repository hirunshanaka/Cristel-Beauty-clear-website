/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors":{
        "primary":"#bd8e0d",
        "secondary":"#e3e1e2",
      }
    },
  },
  plugins: [],
}

