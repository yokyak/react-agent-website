const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'react-dom'
];

module.exports = {
  entry: {
    bundle: './source/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: ['file-loader', 'image-webpack-loader'],
        test: /\.(jpe?g|png|gif)$/i
      },
      {
        use: ['babel-loader', 'react-svg-loader'],
        test: /\.svg$/
      },
      {
        use: 'html-loader',
        test: /\.html$/
      },
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './source/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
