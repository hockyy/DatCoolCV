module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary: "#FFC72C",
        // secondary: "#DA291C",
        // tertiary: "#000000"
      },
      fontFamily: {
        sans: ["Source Sans Pro"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
