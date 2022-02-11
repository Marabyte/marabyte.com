const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const codeHighlighter = require("@sardine/eleventy-plugin-code-highlighter");
const tinyCSS = require("@sardine/eleventy-plugin-tinycss");
const tinyHTML = require("@sardine/eleventy-plugin-tinyhtml");
const safeLinks = require("@sardine/eleventy-plugin-external-links");
const imageOptimiser = require("@sardine/eleventy-plugin-image-optimiser");
const postCSS = require("./lib/postcss.11ty");
const dateFormat = require("./lib/date.11ty");

const purgeFromTailwind = content => content.match(/[A-Za-z0-9-_:\/]+/g) || [];

module.exports = function(eleventyConfig) {
  let markdownLibrary = markdownIt({ html: true }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink()
  });

  eleventyConfig.setLibrary("md", markdownLibrary);
  // Add filters to Nunjucks
  eleventyConfig.addFilter("date", dateFormat);
  eleventyConfig.addPlugin(codeHighlighter);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addAsyncShortcode("css", postCSS);

  // The following copies to files or directories to the public directory
  eleventyConfig.addPassthroughCopy("site/uploads");
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addPassthroughCopy("_redirects");

  if (process.env.ELEVENTY_ENV === "production") {
    eleventyConfig.addPlugin(safeLinks);
    eleventyConfig.addPlugin(imageOptimiser);
    eleventyConfig.addPlugin(tinyCSS, {
      purgeCSS: {
        keyframes: true,
        extractors: [
          {
            extractor: purgeFromTailwind,
            extensions: ["html"]
          }
        ]
      }
    });
    eleventyConfig.addPlugin(tinyHTML);
  }
};
