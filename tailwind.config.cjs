/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bl: "0 5px 15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
