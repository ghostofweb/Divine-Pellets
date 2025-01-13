/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'icegold': '#F5EEE1',  // Icegold background color
        'darkgreen': '#1B392F', // Dark green text color for hover
        // Main Background Colors
        "bg-primary": "#1B392F",     // Main deep forest green
        "bg-darker": "#152B24",      // Darker edge green
        "bg-darkest": "#0F1F1B",     // Darkest corner green
        
        // Logo & Accent Colors
        "gold-light": "#DFC195",     // Lighter metallic gold for highlights
        "gold-base": "#C5A572",      // Base gold color for main elements
        "gold-dark": "#8A7147",      // Darker gold for depth and shadows
        
        // Text Colors
        "text-primary": "#FFFFFF",   // White text
        "text-secondary": "#F5EEE1", // Soft gold for secondary text
        "text-muted": "#A8B3B0",     // Muted text for less emphasis
        
        // UI Element Colors
        "card-bg": "#233832",        // Slightly lighter green for cards
        "card-hover": "#2A433C",     // Hover state for cards
        "border": "#4A635C",         // Border color (light green)
        
        // Status Colors
        "success": "#4A635C",        // Success messages
        "warning": "#DFC195",        // Warning messages
        "error": "#C17667"           // Error messages
      },
      fontFamily: {
        "cinzel": ["Cinzel", "serif"],  // Only Cinzel for headers
        "montserrat": ["Montserrat", "sans-serif"]  // Only Montserrat for body text
      }
    }
  },
  plugins: []
}
