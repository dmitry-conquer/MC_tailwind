module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1550px",
    },
    extend: {
      fontSize: {},
    },
    fontFamily: {},
  },
  future: {
    // hoverOnlyWhenSupported: true,
  },
};
