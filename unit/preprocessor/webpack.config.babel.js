import autoprefixer from 'autoprefixer'
import webpack from 'webpack'
// use the lines below if you don't want to use babel
// const autoprefixer = require('autoprefixer')
// const webpack = require('webpack')

const config = {
  devServer: {
    allowedHosts: ['luffy.ee.ncku.edu.tw', 'merry.ee.nkcu.edu.tw'],
    contentBase: false,
    host: '0.0.0.0',
  },
  entry: './app/app.js',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.pug$/, use: [ 'file-loader?name=[name].html', 'extract-loader', 'html-loader', 'pug-html-loader' ] },
      { test: /\.sass$/, use: [
        'style-loader',
        'css-loader',
        { loader: 'postcss-loader', options: { plugins: [autoprefixer] } },
        'sass-loader',
      ]},
      // { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      // usually you don't need this because of modern browsers
    ],
  },
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
}

export default config
// use the line below if you don't want to use babel
// module.exports = config

// vi:et:sw=2:ts=2
