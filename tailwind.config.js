/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-primary": "#303841",
        "c-secondary": "#3A4750",
        "c-tertiary": "#00ADB5",
        "c-quarternary": "#EEEEEE",
      },
      fontFamily: {
        "f-primary": "'Montserrat', sans-serif",
        "f-secondary": "Raleway, sans-serif",
      },
    },
  },
  plugins: [],
};
