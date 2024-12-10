/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
        brand: {
          100: "var(--color-brand-100)",
          500: "var(--color-brand-500)",
        },
        ns: {
          primary: "#D1DDED",
          secondary: "#031930",
          tertiary: "#758BA5",
          quaternary: "#223A59",
          brand: {
            100: "#B3D6F9",
            500: "#3684DB",
          },
        }
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ':root': {
          '--color-primary': '#D1DDED',
          '--color-secondary': '#031930',
          '--color-tertiary': '#758BA5',
          '--color-quaternary': '#223A59',
          '--color-brand-100': '#B3D6F9',
          '--color-brand-500': '#3684DB',
        },
        '.dark': {
          '--color-primary': '#031930',
          '--color-secondary': '#D1DDED',
          '--color-tertiary': '#223A59',
          '--color-quaternary': '#758BA5',
          '--color-brand-100': '#3684DB',
          '--color-brand-500': '#B3D6F9',
        },
      });
    },
  ],
  darkMode: "class",
};