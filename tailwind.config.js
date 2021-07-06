module.exports = {
  mode: 'jit',
  purge: [
    './site/**/*.{html,njk}',
  ],
  theme: {
    extend: {
      height: {
        "screen-w": "100vw",
        "screen-w-1/2": "50vw",
        "screen-w-1/3": "calc(100vw / 3)",
        "screen-w-1/4": "25vw",
        "screen-w-1/5": "20vw"
      },
      screens: {
        xxl: "1480px"
      }
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
