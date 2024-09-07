const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './js/dashboard_main.js', // Entry file
  output: {
    filename: 'bundle.js', // Output file
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html' // Reference to the HTML file
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Use babel-loader for js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'production'
};
