/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        // Generally used for fonts and backgrounds Greens Like
        GreenShade: "#00211b",
        // Main Baground colour
        GreyShade: "#F3F1EB",
        // Colour Used It Border of Contact Us ,Arrow in it and Font like grey in dropdown in large screen
        DarkGreyShade: "#B0A47F",
        // Hover Animation Color In DarkGreyShade In DropDown Menus
        HoverDarkGreyShade: "#58634D",
        //color of hr in Dropdown of largescreen
        HrTagShade: "#10352B",
        // When Hover On Large Screen Menubuttons Underline Bg color
        UnderLineShadeLg: "#D9D3BF",
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
      transitionProperty: {
        height: "height",
      },
    },
    plugins: [],
  },
};
