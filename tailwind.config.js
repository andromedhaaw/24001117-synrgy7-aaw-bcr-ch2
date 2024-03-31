/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
      colors: {
        lavender: "#f1f3ff",
        blue: "#0d28a6",
        green: "#5CB85F",
        neutral: {
          "01": "#ffffff",
          "02": "#D0D0D0",
          "03": "#8A8A8A",
          "04": "#3C3C3C",
          "05": "#151515",
        },
      },
    },
  },
  plugins: [],
};
