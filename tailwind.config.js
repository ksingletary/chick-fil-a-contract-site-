/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: { // ensure you enable filters if not already enabled
      'none': 'none',
      'brightness-50': 'brightness(50%)',
    },
      boxShadow: {
        'strong': '0 4px 6px 4px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
      },
      colors: {
        primary: "#E51636",
        secondary: "#004f71",
        footer: "#262626"
      },
      fontFamily:{
        apercuRegular: ['ApercuRegular'],
        apercuMedium: ['ApercuMedium'],
        apercuBold: ['Apercu'],
        CaeciliaLight: ['CaeciliaLight'],
        CaeciliaSemi: ['CaeciliaMedium'],
        CaeciliaBold: ['CaeciliaBold']
      },
      container : {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        }
      },
      
    },
  },
  plugins: [],
}

