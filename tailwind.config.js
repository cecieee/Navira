/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
        dark: "var(--color-dark)",
      },
      backgroundImage: {
        kitchen: "url('src/assets/kitchen9.png')",
        map: "url('src/assets/map.png')",
      },
      fontFamily: {
        heading: ["HeroBold", "serif"],
        "home-heading": ["HeroBold", "serif"],
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ addBase }) {
      addBase({
        ':root': {
          '--color-primary': '#22224d',
          '--color-secondary': '#dfb479',
          '--color-tertiary': 'rgba(105, 127, 49, 0.5)',
          '--color-quaternary': '#422c55',
          '--color-dark': '#1d122f',
        },
      });
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
