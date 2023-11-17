const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx|js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx|jsx|js)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
