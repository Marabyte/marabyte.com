const { JSDOM } = require("jsdom");
const Cache = require("@11ty/eleventy-cache-assets");
const Prism = require("prismjs");
const loadLanguages = require("prismjs/components/");

function extractLanguage(className) {
  return className.split("-")[1];
}

module.exports = async function(html, outputPath) {
  if (outputPath && outputPath.endsWith(".html")) {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const head = document.getElementsByTagName('head')[0];

    const codedSections = [
      ...document.querySelectorAll("pre > code")
    ];
    if (codedSections.length > 0) {
      const css = await Cache(
        "https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/themes/prism-tomorrow.min.css",
        {
          duration: "1h",
          type: "text"
        }
      );

      const inline = document.createElement('style');
      const inlinStyle = document.createTextNode(`/*! purgecss start ignore */ ${css} /*! purgecss end ignore */`);
      inline.appendChild(inlinStyle);
      head.appendChild(inline);

      codedSections.map(section => {
        const languages = [];
        const language = extractLanguage(section.className);
        if (language) {
          languages.push(language);
          loadLanguages(languages);
          const code = section.innerHTML;
          const html = Prism.highlight(
            code,
            Prism.languages[language],
            language
          );
          section.innerHTML = html;
          const pre = section.parentElement;
          pre.className = `${pre.className} language-${language}`;
          return section;
        }
      });
      html = dom.serialize();

    }
  }
  return html;
};
