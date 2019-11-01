const path = require('path')

module.exports = {
  entry: {
    bundle: './src/javascripts/app.tsx',
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    chunkFilename: "[name].bundle.js",
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: 'dist',
    port: 4000,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ],
  }
}
