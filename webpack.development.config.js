'use strict'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {
  devtool: 'eval-source-map',

  mode: 'development',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    path.join(__dirname, 'app/index.js')
  ],

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/public/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      classnames: 'classnames'
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]',
              camelCase: 'dashesOnly'
            }
          },
          {
            loader: "sass-loader"
          }]
      },
      {
        test: /.(ttf|otf|eot|svg|png|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      }
    ],
  },
};
module.exports = options;