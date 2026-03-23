/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        accent: "#c8956c",
        "accent-dark": "#a67850",
        light: "#f5f5f0",
        "gray-warm": "#e8e5e0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
