module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        45: "45%",
      },
      backgroundImage: {
        "color-gradient": "url('./img/Gradient.png')",
        "sorpresa-logo": "url('./img/sorpresa-logo.png')",
        "cartrunk-big-card": "url('./img/cartrunk-big-card.png')",
      },
      colors: {
        defaultGray: "#E9E9E9",
        defaultPurple: "#402D8B",
        defaultPinkBg: "#DFD5DE",
        pinkAccntName: "#CF2548",
        defaultWhite: "#F5F5F5",
        defaultBlack: "#656565",
        statusBlue: "#00A7E1",
        statusGreen: "#7BD389",
        statusRed: "#FB4B4E",
        purple2: "#AF88BE",
        purple3: "#A11E6C",
        motifBlue: "#1e90ff",
        motifRed: "#ff0000",
        motifGreen: "#008000",
        motifPink: "#ff69b4",
        motifGold: "#daa520",
        motifOrange: "#ff8c00",
        motifViolet: "#800080",
      },
      fontSize: {
        tiny: "10px",
      },
      fontFamily: {
        poppins: "'Poppins', serif",
      },
    },
    fill: (theme) => ({
      active: theme("#402D8B"),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
