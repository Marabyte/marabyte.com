module.exports = {
  ci: {
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.9}],
        'categories:accessibility': ['error', {minScore: 0.85}]
      }
    },
    collect: {
      staticDistDir: './_site',
    }
  },
};