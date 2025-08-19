/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'logo':"'Playfair Display', sans-serif"
      },
      colors: {
        primary: '#cda45e',
         'default-color': 'rgba(255, 255, 255, 0.7)',
        'primary/8': 'rgba(205, 164, 94, 0.8)',
         'bordercolor':  'color-mix(in srgb, var(--default-color), transparent 80%)'
    },
  },
  plugins: [],
}}

