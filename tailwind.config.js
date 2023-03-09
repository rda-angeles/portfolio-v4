/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-primary": "#132C33",
        "c-secondary": "#126E82",
        "c-tertiary": "#51C4D3",
        "c-quarternary": "#D8E3E7",
      },
      fontFamily: {
        "f-primary": "'Montserrat', sans-serif",
        "f-secondary": "Raleway, sans-serif",
      },
    },
  },
  plugins: [],
};
