import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C83FD",
        secondary: "#A5B4FC",
        background: "#F6F7FF"
      }
    }
  },
  plugins: []
}

export default config