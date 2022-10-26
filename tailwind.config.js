/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#F3F3F3",
        primary: "#D1D1D1",
        secondary: "#DFDFDF",
        tertiary: "#D9D9D9",
        form: "#E1E1E1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "split-to-right":
          "linear-gradient(to right, #F3F3F3 50% , #E1E1E1 50%);",
        "split-to-bottom":
          "linear-gradient(to bottom, #F3F3F3 50% , #E1E1E1 50%);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
