/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#231F20",
        primary_variant_1: "#393536",
        primary_variant_2: "#4F4C4D",
        primary_variant_3: "#919191",
        primary_variant_dark: "#1F1D1D",
        accent: "#AA8628",
        accent_variant: "#85691E"
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        xsm: "800px",
        md: "1060px",
        lg: "1250px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
}
