/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c0636",
        secondary: "#095169",
        tertiary: "#059b9a",
        accent: "#53ba83",
        highlight: "#9fd86b",
      },
    },
  },
  plugins: [],
} 