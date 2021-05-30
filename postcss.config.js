const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("autoprefixer"),
    purgecss({
      content: ["**/*.tsx"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
