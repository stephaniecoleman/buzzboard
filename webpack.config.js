const path = require('path')

module.exports = {
  entry: [
    path.resolve(__dirname, 'app/index.js')
  ],

  module: {
    loaders: [
      {
        loaders: ['babel-loader'],
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'app'),
      }
    ]
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  }
}
