const sassBuild = require("./lib/sass.11ty");
const htmlmin = require("./lib/html-minify.11ty");
const dateFormat = require("./lib/date.11ty");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pictureBuilder = require("./lib/picture.11ty");
const tinyCSS = require("@greyskullrocks/eleventy-plugin-tinycss");


module.exports = function(eleventyConfig) {

  // Add filters to Nunjucks
  eleventyConfig.addFilter("date", dateFormat);
  eleventyConfig.addFilter("sass", sassBuild);

  // The following copies to `_site/assets`
  eleventyConfig.addPassthroughCopy("site/uploads");
  eleventyConfig.addPassthroughCopy("site/assets");

  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform("htmlmin", htmlmin);
    eleventyConfig.addTransform("pictureBuilder", pictureBuilder);
    eleventyConfig.addPlugin(tinyCSS, {purgeCSS: {keyframes: true}});
    eleventyConfig.addPlugin(pluginRss);  
  }

};
