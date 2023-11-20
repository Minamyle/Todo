/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#3E8E7B',
        // Add custom background colors
        customBgColor: '#F2F5FF', // You can change the color value to your preference
      },
    },
  },
  plugins: [],
}
