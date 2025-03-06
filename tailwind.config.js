/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B00FF", // Roxo MELI+
        secondary: "#6D1BFF", // Roxo mais escuro para hover
        lightgray: "#F5F5F5", // Fundo suave
        white: "#FFFFFF", // Branco
      },
    },
  },
  plugins: [],
};
