/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        imgGelap: "rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        "3xl": "4px 5px 5px 5px rgba(0.5, 0.5, 0.5, 0.5)",
      },
      height: {
        hero: "480px",
      },
    },
  },
  plugins: [],
};
