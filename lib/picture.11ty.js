const path = require("path");
const sharp = require("sharp");
const { promisify } = require("util");
const sizeOf = promisify(require("image-size"));
const exists = promisify(require("fs").exists);
const { JSDOM } = require("jsdom");
const avif = require("./avif");


/**
 * 1 - Parse HTML
 * 2 - Find Image elements
 * 3 - Read image's attributes (src, alt, title)
 * 4 - Use img src to create multiple image formats (avif, webp, optimize jpg)
 * 5 - Compose picture element
 */

const widths = [1920, 1280, 640, 320];

const extension = {
  jpeg: "jpg",
  webp: "webp",
  avif: "avif",
};

async function srcset(filename, format) {
  const names = await Promise.all(widths.map(w => resize(filename, w, format)));
  return names.map((n, i) => `${n} ${widths[i]}w`).join(", ");
}

async function resize(filename, width, format) {
  const out = sizedName(filename, width, format);
  if (await exists("_site" + out)) {
    return out;
  }
  if (format == "avif") {
    await avif("_site" + filename, "_site" + out, width);
  } else {
    await sharp("_site" + filename)
      .resize(width)
      [format]({
        quality: 75,
        reductionEffort: 6
      })
      .toFile("_site" + out);
  }

  return out;
}

function sizedName(filename, width, format) {
  const ext = extension[format];
  if (!ext) {
    throw new Error(`Unknown format ${format}`);
  }
  return filename.replace(/\.\w+$/, _ => "-" + width + "w" + "." + ext);
}


async function setSrcset(img, src, format) {
  img.setAttribute("srcset", await srcset(src, format));
  img.setAttribute(
    "sizes",
    img.getAttribute("align")
      ? "(max-width: 608px) 50vw, 187px"
      : "(max-width: 608px) 100vw, 608px"
  );
}

async function buildPicture(img, outputPath) {
  let src = img.getAttribute("src");

  // if the image source is external, there's nothing to do
  if (/^(https?\:\/\/|\/\/)/i.test(src)) {
    return;
  }

  // if the image source is relative resolve the path to it
  if (/^\.+\//.test(src)) {
    src =
      "/" +
      path.relative("./_site/", path.resolve(path.dirname(outputPath), src));
  }

  let dimensions;

  try {
    dimensions = await sizeOf("_site/" + src);
  } catch (error) {
    console.warn(error.message, src);
    return;
  }

  if (!img.getAttribute("width")) {
    img.setAttribute("width", dimensions.width);
    img.setAttribute("height", dimensions.height);
  }

  img.setAttribute("decoding", "async");
  img.setAttribute("loading", "lazy");

  // If the image type is SVG, we're done.
  if (dimensions.type == "svg") {
    return;
  }

  const doc = img.ownerDocument;
  const picture = doc.createElement("picture");

  const webp = doc.createElement("source");
  const jpeg = doc.createElement("source");
  const avif = doc.createElement("source");

  await setSrcset(webp, src, "webp");
  webp.setAttribute("type", "image/webp");
  await setSrcset(jpeg, src, "jpeg");
  jpeg.setAttribute("type", "image/jpeg");
  await setSrcset(avif, src, "avif");
  avif.setAttribute("type", "image/avif");

  picture.appendChild(webp);
  picture.appendChild(jpeg);
  picture.appendChild(avif);

  img.parentElement.replaceChild(picture, img);
  picture.appendChild(img);
}

module.exports = async function(content, outputPath) {
  if (outputPath && outputPath.endsWith(".html")) {
    const dom = new JSDOM(content);
    const images = [...dom.window.document.querySelectorAll("img")];
    if (images.length > 0) {
      await Promise.all(images.map(img => buildPicture(img, outputPath)));
      content = dom.serialize();
    }
  }

  return content;
};
