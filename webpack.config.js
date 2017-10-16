const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html', // for trial and once webpac is run and public generates index and bundle delete dist
  title: 'React-Redux',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'), // because public folder will create index.js and bundle.js for build
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less/,
        loaders: 'style-loader!css-loader!sass-loader',
        include: path.join(__dirname, 'src') // we need to add include in order to include less file samjhee bhaiyaaa
      },
      {
        test: /\.scss$/,
        loaders: 'style-loader!css-loader!sass-loader',
        include: path.join(__dirname, 'src') // we need to add include in order to include sass file samjhee bhaiyaaa
      },
      {
        test: /\.(png|jpg)$/,
        loaders: 'file-loader'
      }
    ]
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    HtmlWebpackPluginConfig
  ]
}
