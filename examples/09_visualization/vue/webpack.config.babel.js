import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
import webpack from 'webpack'

const config = {
  context: resolve('app'),
  devServer: {
    contentBase: false,
    disableHostCheck: true,
    host: '0.0.0.0',
    inline: true,
    stats: {
      chunkModules: false,
    },
  },
  entry: {
    main: './app.js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].html' } },
          { loader: 'extract-loader' },
          { loader: 'html-loader' },
          { loader: 'pug-html-loader' },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].css' } },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: { plugins: [autoprefixer] } },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: resolve('node_modules'),
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            postcss: { plugins: [autoprefixer] },
            loaders: { sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' },
          },
        },
      },
      {
        test: /\.(eot|ico|jpg|mp3|svg|ttf|woff2|woff|png?)($|\?)/,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', options: { insertAt: 'top' } },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.csv$/,
        use: {
          loader: 'csv-loader',
          options: {
            dynamicTyping: true,
            skipEmptyLines: true
          },
        },
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
  },
  plugins: [
  ],
}

process.noDeprecation = true
if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    ...config.plugins,
    new webpack.DefinePlugin({ 'process.env': { node_env: '"production"' }}),
    new webpack.optimize.uglifyjsplugin({ output: { comments: false }, compress: { warnings: false }}),
  ]
}

export default config
