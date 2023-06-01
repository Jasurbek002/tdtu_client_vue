/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale:{
        lg:"1200px",
        md:"926px",
        sm:"481px"
      },
      colors:{
        grenn:"#1b6b50"
      }
    },
  },
  plugins: [],
}
