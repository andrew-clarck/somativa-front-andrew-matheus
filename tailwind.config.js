/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Se você tiver um index.html na raiz
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "fundo-principal": "#0B1020",
        "fundo-card": "#151C32",
        "cor-principal": "#7C3AED",
        "cor-destaque": "#06B6D4",
        "texto-principal": "#F8FAFC",
        "texto-secundario": "#94A3B8",
        "borda": "#273449",
        "sucesso": "#22C55E",
        "erro": "#EF4444",
        "cor-secundaria": "#2563EB",
      },
    },
  },
  plugins: [],
};
