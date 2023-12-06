/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "600px",
        md: "976px",
        lg: "1340px",
      },
      colors: {
        ["hover-bg"]: "#2E2E2E",
      },
    },
  },
  plugins: [],
};
