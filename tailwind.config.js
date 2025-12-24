/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2C466D",
          yellow: "#F9C100",
          dark: "#1a2c45",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Wix Madefor Display", "sans-serif"],
      },
    },
  },
};
