module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    fontFamily: {
      primary: "Kanit",
    },
    extend: {
      colors: {
        darkblue: {
          DEFAULT: "#27262B",
          secondary: "#252540",
        },
        blue: {
          DEFAULT: "#ffc11c",
          hover: "#C3983C",
        },
        gray: {
          DEFAULT: "#E0E0E0",
        },
        violet: "#313131",
        white: "#ffffff",
      },
      boxShadow: {
        primary: "0px 20px 200px rgba(57, 23, 119, 0.05)",
      },
      backgroundImage: {
        newsletter: "#27262B",
        newsletterBox: "#ffc11c",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
  },
  plugins: [],
};
