const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const rehypeHighlight = require('rehype-highlight');
const path = require('path');

/**
 *
 * @param {*} env
 * @returns {import('webpack').ModuleOptions['rules']}
 */
const rules = (env) => [
  {
    test: /\.worker\.jsx?$/,
    use: [
      {
        loader: path.resolve(__dirname, './worker-loader.js'),
      },
      'babel-loader',
    ],
  },
  {
    test: /\.jsx?$/,
    use: 'babel-loader',
    exclude: [/node_modules/, /\.worker\.jsx?$/],
  },
  {
    test: /\.mdx$/,
    use: [
      'babel-loader',
      {
        loader: '@mdx-js/loader',
        /** @type {import('@mdx-js/loader').Options} */
        options: {
          jsxRuntime: 'automatic',
          jsxImportSource: '@easythings/easy-view',
          rehypePlugins: [rehypeHighlight],
        },
      },
    ],
    exclude: /node_modules/,
  },
  {
    test: /\.(css|scss|sass)$/,
    // 区别开发环境和生成环境
    use:
      env.goal === 'development'
        ? ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
        : [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
  },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 4 * 1024,
      },
    },
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
  {
    test: /\.(csv|tsv)$/i,
    use: ['csv-loader'],
  },
  {
    test: /\.xml$/i,
    use: ['xml-loader'],
  },
  {
    test: /\.html$/,
    // html中的img标签
    use: {
      loader: 'html-loader',
      options: {
        minimize: true,
      },
    },
  },
];

module.exports = rules;
