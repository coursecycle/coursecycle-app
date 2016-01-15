var webpack = require("webpack");

module.exports = {
  entry: './src/app/init.tsx',
  output: {
    filename: './build/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /node_modules\/semantic-ui-sidebar\/sidebar.js/,
        loader: 'import?jQuery=jquery,$=jquery,this=>window'
      }
    ]
  }
}
