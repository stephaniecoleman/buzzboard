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
        include: path.resolve(__dirname, 'app')
      },
      // CSS loaders for CSS Module
      {
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        test: /\.css/,
        include: [
          path.resolve(__dirname, 'app'),
          path.join(__dirname, 'node_modules', 'purecss')
        ]
      }
    ]
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  }
}
