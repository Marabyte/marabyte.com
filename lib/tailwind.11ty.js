const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const cssnano = require('cssnano');
const { readFileSync } = require('fs');

module.exports = function(file, callback) {
  const cssRaw = readFileSync(file);

  const postcssPlugins = [
    atImport,
    tailwindcss,
    autoprefixer,
    purgecss,
    cssnano
  ];
  /**
   * Async Nunjucks filters need a callback
   * https://www.11ty.dev/docs/languages/nunjucks/#asynchronous-nunjucks-filters
   */
  postcss(postcssPlugins)
    .process(cssRaw, { from: file })
    .then(result => {
      callback(null, result.css);
    })
    .catch(error =>
      console.error(
        `11ty Tailwind: failed to process TailwindCSS file : ${error}`
      )
    );
};
