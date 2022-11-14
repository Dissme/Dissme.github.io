const path = require('path');
// html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 静态资源输出
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const rules = require('./rules.config');

module.exports = (env, argv) => {
  console.log(env);
  /** @type {import('webpack').Configuration} */
  const config = {
    mode: argv.mode,
    entry: {
      bootstrap: path.resolve(__dirname, '../src/bootstrap.jsx'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'easy-view',
        filename: 'index.html',
        chunks: 'all',
        template: path.resolve(__dirname, '../template.html'),
      }),
      new HtmlWebpackPlugin({
        title: 'easy-view',
        filename: '404.html',
        chunks: 'all',
        template: path.resolve(__dirname, '../template.html'),
      }),
      new Dotenv({
        path: `.env.${env.goal}`,
      }),
      // 静态资源输出
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../src/static'),
          },
        ],
      }),
    ],
    // 优化
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      minimize: argv.mode === 'production',
      minimizer: [
        new TerserWebpackPlugin({
          parallel: true,
        }),
      ],
      splitChunks: {
        cacheGroups: {
          // 抽离第三方插件
          vendor: {
            // 指定是node_modules下的第三方包
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            // 打包后的文件名，任意命名
            name: 'vendor',
            // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
            priority: 10,
          },
          // 抽离自己写的公共代码，common这个名字可以随意起
          utils: {
            chunks: 'initial',
            // 任意命名
            name: 'common',
            // 只要超出0字节就生成一个新包
            minSize: 0,
            minChunks: 2,
          },
        },
      },
    },
    module: {
      rules: [...rules(env)],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src/'),
      },
      extensions: ['.jsx', '.js'],
    },
    cache: {
      type: 'filesystem',
      compression: 'gzip',
      allowCollectingMemory: true,
    },
  };

  if (argv.mode === 'development') config.devtool = 'source-map';

  return config;
};
