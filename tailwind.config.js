module.exports = {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  darkMode: true,

  daisyui: {
    themes: [
      {
        inmind: {
          primary: "#3B4883",
          secondary: "#FF7124",
          accent: "#DBBBA7",
          neutral: "#202124",
          "base-100": "#272D4E",
          info: "#84a5d6",
          success: "#2E4e2e",
          warning: "#7e762e",
          error: "#4e2e2e",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "inmind", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
