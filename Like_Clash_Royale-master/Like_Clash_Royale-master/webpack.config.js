//path.resolve(__dirname) trás o nome do diretório atual

const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './js/index.mjs'),
    bundle2: path.resolve(__dirname, './js/index2.mjs')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}
