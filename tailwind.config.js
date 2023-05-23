/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-pattern": "url('src/assets/Frame 7 1.svg')",
        "login-pattern-mobile": "url('src/assets/Frame 8 2.svg')",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serrif"],
        Inter: ["Inter", "sans-serrif"],
      },
      colors: {
        "orange-sempoa": "#FB9E23",
        white: "#FAFAFA",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
}
