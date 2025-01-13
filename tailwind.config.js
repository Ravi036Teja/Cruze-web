// const { Container } = require("postcss")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
    },
    colors:{
      primary:"#f7ba34",
      secondary:"#ff0000",
      light:"#f7f7f7",
      dark:"#333333",
      dark2:"#999999",
      black:"#000000",
      white:"#ffffff"
    },
    Container:{
        center:true,
        padding: {
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        }
    }
  },
  plugins: [],
};
