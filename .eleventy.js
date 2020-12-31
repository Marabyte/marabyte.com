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
  eleventyConfig.addPlugin(pluginRss);  

  // The following copies to files or directories to the public directory
  eleventyConfig.addPassthroughCopy("site/uploads");
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addPassthroughCopy("_redirects");


  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform("htmlmin", htmlmin);
    eleventyConfig.addTransform("pictureBuilder", pictureBuilder);
    eleventyConfig.addPlugin(tinyCSS, {purgeCSS: {keyframes: true}});
  }

};
