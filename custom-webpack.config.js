const ExtensionReloader = require('webpack-extension-reloader')

module.exports = {
  watch: true,
  entry: {
    background: './src/background/index.ts'
  },
  output: {
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  plugins: [new ExtensionReloader({ reloadPage: true })],
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
}
