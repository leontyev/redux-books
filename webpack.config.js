const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?includePaths=' + path.resolve(__dirname, './src')
]

const config = {
  entry: {
    app: ['./src/index']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader?name=pictures/[name].[ext]"
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
    publicPath: '/build'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 20 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.sass'],
    root: [path.join(__dirname, './src')]
  },
  devServer: {
    historyApiCallback: true,
    contentBase: './'
  }
}

module.exports = config;
