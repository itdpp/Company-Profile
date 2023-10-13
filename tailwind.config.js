/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
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
      // screens: {
      //   'sm': { 'min': '320px', 'max': '359px' },
      //   'md': { 'min': '360px', 'max': '479px' },
      //   'lg': { 'min': '480px', 'max': '767px' },
      //   'xl': { 'min': '768px', 'max': '991px' },
      //   '2xl': { 'min': '992px', 'max': '1279px' },
      //   '3xl': { 'min': '1280px' }
      // },
    },
  },
  plugins: [require('flowbite/plugin')],
};
