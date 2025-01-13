/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#FFFFFF",
        "dark-green": "#1B392F",
        "gold-bronze": "#C5A572",
        "light-green": "#4A635C",
        "very-light-green": "#F4F7F6",
        "soft-gold": "#F5EEE1",
        "dark-gray": "#333333",
        "card": "#F4F7F6"
      },
      fontFamily: {
        "header": ["Optima", "Trajan Pro", "Cinzel", "serif"],
        "body": ["Montserrat", "Open Sans", "Lato", "sans-serif"]
      }
    }
  },
  plugins: []
}
