/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'hero' : '480px',
      },
      boxShadow: {
        '3xl': '4px 5px 5px 5px rgba(0.5, 0.5, 0.5, 0.5)',
      }
    },
  },
  plugins: [],
}

