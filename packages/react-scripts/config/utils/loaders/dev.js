'use strict';

const autoprefixer = require('autoprefixer');

module.exports.styleLoader = () => require.resolve('style-loader');

module.exports.cssLoader = (modules = false) => ({
  loader: require.resolve('css-loader'),
  options: {
    modules,
    importLoaders: 1,
  },
});

module.exports.prependLoader = parentClass => ({
  loader: require.resolve('postcss-loader'),
  options: {
    plugins: [
      require('postcss-prepend-selector')({
        selector: parentClass ? `.${parentClass} ` : '',
      }),
    ],
  },
});

module.exports.postCssLoader = () => ({
  loader: require.resolve('postcss-loader'),
  options: {
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    ident: 'postcss',
    plugins: [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
    ],
  },
});

module.exports.sassLoader = () => require.resolve('sass-loader');
