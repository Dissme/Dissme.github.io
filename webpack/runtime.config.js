const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackConfig = require('./index.config');

/** @type {import('webpack').Configuration} */
const webpackConfigRuntime = {
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  devServer: {
    historyApiFallback: {
      index: '/404.html',
    },
    headers: {
      'Cross-Origin-Resource-Policy': 'same-origin',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Service-Worker-Allowed': '/',
    },
    https: {
      key: path.resolve(__dirname, '../ca/key.pem'),
      cert: path.resolve(__dirname, '../ca/cert.pem'),
    },
    compress: true,
    hot: true,
    open: true,
  },
};

module.exports = (env, argv) => {
  return webpackMerge.merge(webpackConfig(env, argv), webpackConfigRuntime);
};
