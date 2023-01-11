/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-link": "#2997ff",
        "nav-link": "#f5f5f7",
        "apple-watch-red": "#c82025",
        "grid-item-1-bg": "#fbfbfd",
        "grid-item-1-text": "#fe6915",
        "grid-item-2-bg": "#f5f5f7",
        "grid-item-3-bg": "#bc1123",
        "grid-item-4-bg": "#fbfbfb",
        "footer-bg": "#f5f5f7",
        "footer-text-color": "#6e6e73",
        "footer-link-color": "#424245",
      },
      fontFamily: {
        SF: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
}
