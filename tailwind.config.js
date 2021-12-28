const colors = require("tailwindcss/colors");
//const Color = require("color");
//const darken = (clr, val) => Color(clr).darken(val).rgb().string();
//const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.orange,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
