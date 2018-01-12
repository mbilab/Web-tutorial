import autoprefixer from 'autoprefixer'
import webpack from 'webpack'

const config = {
  context: `${__dirname}/app`,
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    inline: true,
  },
  entry: './app.js',
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
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: { plugins: [autoprefixer] } },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ico|jpg|mp3|svg|ttf|woff2|woff|png?)($|\?)/,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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
    path: `${__dirname}/dist`,
  },
}

process.noDeprecation = true
if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    ...config.plugins,
    new webpack.DefinePlugin({ 'process.env': { node_env: '"production"' }}),
    new webpack.optimize.UglifyJsPlugin({ output: { comments: false }, compress: { warnings: false }}),
  ]
}

export default config
