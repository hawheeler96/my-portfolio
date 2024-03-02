/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      kalina: ["Kalina", "serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
    colors: {
      "xanthous": "#ffc759",
      "rose": "#ff7b9c",
      "glaucous": "#607196",
      "french-grey": "#babfd1",
      "soft-white": "#e8e9ed",
      "space-cadet": "#363457",
      "midnight": "#172554",
    },
    extend: {},
  },
  plugins: [],
};

