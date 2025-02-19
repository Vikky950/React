/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#023047",
        nav: "#022030",
        white: "#fff",
        secondary: "#00f6ff",
        orange: "#fb8500",
        red: "#e63946",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        blur: "rgba(255, 255, 255, 0.1)",
        blurr: "rgba(255, 255, 255, 0.2)",
        ecoGreen: "#1DB559",
        ecoGreen: "#1DB559",
        ecoOrange: "#F67218",
        ecoLightGreen: "#E8FFED",
        ecoBlue: "#2EA2CF",
        inputBg: "#F5F5F5",
        inputBorder: "#DADADA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: "Montserrat",
        nunito: '"Nunito Sans", sans-serif',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xxlg: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
};