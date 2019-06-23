module.exports = {
  plugins: {
    'postcss-import': {
      path: ['src/assets/styles'],
    },
    'postcss-preset-env': {
      stage: 0,
      browsers: 'last 2 versions',
    },
    'postcss-nested': {},
    cssnano: {},
  },
};
