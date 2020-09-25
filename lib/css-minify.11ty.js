const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("postcss");
const purgeHtml = require("purgecss-from-html");
const purgecss = require("@fullhuman/postcss-purgecss");
const { JSDOM } = require("jsdom");
const { readFileSync } = require("fs");

async function minify(css, html) {
  // TODO: This is a lazy solution. A better solution would be to read all the <link> with
  // rel="stylesheet" or type="text/css" and the delete them
  let globalcss = readFileSync("_site/assets/styles/tailwind.css", {
    encoding: "utf-8"
  });

  globalcss = globalcss + css;

  const postcssPlugins = [
    purgecss({
      content: [
        {
          raw: html,
          extension: "html"
        }
      ],
      extractors: [
        {
          extractor: purgeHtml,
          extensions: ["html"]
        }
      ],
      fontFace: true,
      keyframes: true
    }),
    autoprefixer,
    cssnano
  ];

  const minicss = await postcss(postcssPlugins).process(globalcss);
  return minicss.css;
}

module.exports = async function(content, outputPath) {
  if (outputPath && outputPath.endsWith(".html")) {
    const dom = new JSDOM(content);
    const styles = [...dom.window.document.querySelectorAll("style")];
    if (styles.length > 0) {
      let css = "";
      for (const style of styles) {
        css = css + style.textContent;
        style.remove();
      }
      const minicss = await minify(css, content);
      const document = dom.window.document;
      const inline = document.createElement("style");
      const head = document.getElementsByTagName("head")[0];
      const inlinStyle = document.createTextNode(minicss);
      inline.appendChild(inlinStyle);
      head.appendChild(inline);
      content = dom.serialize();
    }
  }

  return content;
};
