/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b6ef6",
        accent: "#ff7a59"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Helvetica", "Arial"]
      }
    }
  },
  plugins: []
};
