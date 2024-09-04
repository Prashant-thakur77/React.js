/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //necessary to change config in tailwind
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}
