const autoprefixer = require('autoprefixer')
const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: false,
    disableHostCheck: true,
    host: '0.0.0.0',
    stats: { colors: true, modules: false },
  },
  entry: './app/vue.js',
  module: {
    rules: [
      { test: /\.vue$/, use: { loader: 'vue-loader', options: {
        loaders: { sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' },
        postcss: { plugins: [autoprefixer] },
      }}},
    ],
  },
  output: {
    filename: 'vue.js',
    path: `${__dirname}/dist`,
  },
  plugins: [],
}

if ('production' === process.env.NODE_ENV) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
    })
  )
}

// vi:et
