/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", ".src/**/*{.jsx,.js}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { inter: ["Inter", "sans-serif"] },
    },
  },
  plugins: [],
};
