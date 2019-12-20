const sass = require('sass');

module.exports = function(file) {
  if (!file) {
    console.error(`11ty SASS : There's no SASS/SCSS file to be processed.`);
    return '';
  }

  let { css } = sass.renderSync({ file, outputStyle: 'compressed' });

  if (!css) {
    console.error(`11ty SASS : failed to complie SASS/SCSS file.`);
    return '';
  }
  return css.toString('utf8');
};
