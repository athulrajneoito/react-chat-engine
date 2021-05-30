const purgeCSS = require('@fullhuman/postcss-purgecss');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: {
    plugins: [
      require('tailwindcss'),
      purgeCSS({
        content: [
         './src/**/*.tsx'
        ],
        css: ['./src/**/*.css']
      })
    ]
  },
}
