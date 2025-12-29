/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'atlantic-purple': '#5B59A7',
        'atlantic-pink': '#E8A2B9',
      },
    },
  },
  plugins: [],
}