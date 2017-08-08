var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    APP_DIR + '/index.js',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'app.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        include: [
          APP_DIR
        ],
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        loaders: ['babel-loader'],
        include: [
          APP_DIR
        ],
        test: /\.js$/
      }
    ]
  }
};

module.exports = config;
