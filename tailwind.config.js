module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
        purple2: "#AF88BE",
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
