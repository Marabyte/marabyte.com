module.exports = {
  /** Specify the paths to all of the template files in your project */
  content: ['./site/**/*.njk'],
  /** Include any special characters you're using in this regular expression */
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};
