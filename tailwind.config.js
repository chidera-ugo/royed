/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      425: "425px",
      560: "560px",
      640: "640px",
      768: "768px",
      880: "880px",
      960: "960px",
      1024: "1024px",
      1200: "1200px",
      1280: "1280px",
      1700: "1700px",
      1800: "2300px",
    },
    extend: {
      fontFamily: {
        primary: ["Lexend", "sans"],
        secondary: ["Playfair Display", "serif"],
      },
      colors: {
        primary: {
          main: "#F7144F",
          800: "#E0073F",
          900: "#8E0033",
        },
        secondary: {
          main: "#68B42E",
          800: "#55AD12",
        },
        mustard: {
          main: "#ED9326",
        },
        "hero-gradient": {
          start: "#000000",
          end: "#00000030",
          mid: "#00000090",
        },
      },
      minHeight: {
        hero: "calc(100vh - 120px)",
        "hero-mobile": "calc(100vh - 80px)",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
