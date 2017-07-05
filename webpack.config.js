var webpack = require('webpack');
var path = require('path');

var entries = require('./entries');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

for (let enKey in entries) {
  if (entries.hasOwnProperty(enKey)) {
    entries[enKey] = [].concat(entries[enKey]).concat(hotMiddlewareScript);
  }
}

module.exports = {

  entry: entries,

  output: {
    filename: '[name]_build.min.js',
    publicPath: 'http://localhost:3000/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              [
                'es2015', {
                  modules: false
                }
              ]
            ]
          }
        }
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              minimize: true
            }
          }, {
            loader: "sass-loader",
            options: {
              outputStyle: "compressed"
            }
          }, {
            loader: "postcss-loader"
          }
        ]
      }, {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000
            }
          }
        ]
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
};
