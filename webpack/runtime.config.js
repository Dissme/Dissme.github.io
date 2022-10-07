const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackConfig = require('./index.config');

const webpackConfigRuntime = {
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../docs'),
    clean: true,
  },
  devServer: {
    headers: {
      'Cross-Origin-Resource-Policy': 'same-origin',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
    https: true,
    compress: true,
    hot: true,
    open: true,
  },
};

module.exports = (env, argv) => {
  return webpackMerge.merge(webpackConfig(env, argv), webpackConfigRuntime);
};
