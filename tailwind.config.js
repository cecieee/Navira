/** @type {import('tailwindcss').Config} */
// const colors= require('tailwindcss/defaultTheme')
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#dfb479",
        primary: "#22224d",
        tertiary: "rgba(105, 127, 49, 0.5)",
        quarternery:"#422c55",
        dark:"#1d122f"
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
  plugins: [],
};
