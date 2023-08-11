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
        fontColor: "#00211b",
        main: "#f3f1eb",
        ofProgressBar: "#afa47f",
        buttonBorder: "#beb495",
        secondaryFont: "#b0a47f",
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman'
      },
      transitionProperty: {
        'height': 'height'
      }
    },
    plugins: [],
  },
};
