'use strict';

const { postCssLoader, prependLoader, sassLoader } = require('./dev');

module.exports.styleLoader = () => ({
  loader: require.resolve('style-loader'),
  options: {
    hmr: false,
  },
});

module.exports.cssLoader = (sourceMap, modules = false) => ({
  loader: require.resolve('css-loader'),
  options: {
    sourceMap,
    modules,
    importLoaders: 1,
    minimize: true,
  },
});

module.exports.prependLoader = prependLoader;
module.exports.postCssLoader = postCssLoader;
module.exports.sassLoader = sassLoader;
