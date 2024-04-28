/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E51636"
      },
      fontFamily:{
        apercuRegular: ['Regular'],
        apercuMedium: ['Medium'],
        apercuBold: ['Bold']
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

