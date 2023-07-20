/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1200px",
        md: "926px",
        sm: "481px",
        ssm: "340px",

        mobile: "749px",
      },
      colors: {
        grenn: "#1b6b50",
      },
    },
  },
  plugins: [],
};
