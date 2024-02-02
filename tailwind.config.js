/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,tx,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-app" : "#0000FF"
      }
    },
  
  },
  
  plugins: [],
}

