const sassBuild = require("./lib/sass.11ty");
const dateFormat = require("./lib/date.11ty");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pictureBuilder = require("./lib/picture.11ty");
const tinyCSS = require("@sardine/eleventy-plugin-tinycss");
const tinyHTML = require("@sardine/eleventy-plugin-tinyhtml");
const safeLinks = require('@sardine/eleventy-plugin-external-links');

module.exports = function(eleventyConfig) {

  // Add filters to Nunjucks
  eleventyConfig.addFilter("date", dateFormat);
  eleventyConfig.addFilter("sass", sassBuild);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(safeLinks);

  // The following copies to files or directories to the public directory
  eleventyConfig.addPassthroughCopy("site/uploads");
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addPassthroughCopy("_redirects");


  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform("pictureBuilder", pictureBuilder);
    eleventyConfig.addPlugin(tinyCSS, {purgeCSS: {keyframes: true}});
    eleventyConfig.addPlugin(tinyHTML);
  }

};
