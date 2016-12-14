const path = require('path')

module.exports = {
  entry: [
    path.resolve(__dirname, 'app/index.js')
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'app'),
        loaders: ['babel-loader']
      }
    ]
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  }
}