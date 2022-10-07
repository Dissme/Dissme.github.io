const path = require('path');
const glob = require('glob');
// html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 静态资源输出
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const rules = require('./rules.config');

/**
 * @function 获取入口
 */
function getEntry() {
  const entry = {};
  glob.sync('./src/pages/**/index.jsx').forEach((name) => {
    const start = name.indexOf('src/') + 4;
    const end = name.length - 3;
    let n = name.slice(start, end);
    // 保存各个组件的入口
    n = n.slice(0, n.lastIndexOf('/'));
    n = n.split('pages/')[1];
    entry[n] = { import: name, dependOn: 'bootstrap' };
  });
  return entry;
}

/**
 * @description 入口对象
 */
const entry = getEntry();
/**
 * @description html模板数组
 */
const htmlTemplateArray = [];
// 生成模板
Object.keys(entry).forEach((filename) => {
  htmlTemplateArray.push(
    new HtmlWebpackPlugin({
      title: filename,
      filename: `${filename}.html`,
      chunks: ['vendor', 'common', 'bootstrap', filename],
      template: path.resolve(__dirname, '../template.html'),
    }),
  );
});

entry.bootstrap = path.resolve(__dirname, '../src/bootstrap.js');

module.exports = (env, argv) => {
  console.log(env);
  const config = {
    mode: argv.mode,
    entry,
    plugins: [
      ...htmlTemplateArray,
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
