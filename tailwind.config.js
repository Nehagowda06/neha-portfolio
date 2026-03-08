/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C83FD",
        primaryDark: "#5A61F6",
        background: "#EEF0FF"
      }
    }
  },
  plugins: [],
}