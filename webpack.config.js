const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    testService: path.join(__dirname, 'testService'),
  },

  target: 'electron',

  output: {
    path: path.join(__dirname, 'testService/dist'),
    filename: 'index.js',
  },

  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'testService/dist')], {
      root: process.cwd(),
    }),
  ],
};
