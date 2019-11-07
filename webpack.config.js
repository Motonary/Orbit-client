const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: "./src/app.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    chunkFilename: "[name].bundle.js",
    publicPath: '/',
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  devServer: {
    contentBase: "dist",
    host: "0.0.0.0",
    port: 4000,
    historyApiFallback: true,
    inline: true,
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
  },
  plugins: [
    new ExtractTextPlugin({ filename: "[name].css", allChunks: true }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],
}
