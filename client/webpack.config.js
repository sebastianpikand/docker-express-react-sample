const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const publicFolder = path.join(__dirname, "public");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    host: "0.0.0.0",
    contentBase: publicFolder,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000,
    proxy: {
      "/api": {
        target: {
          host: "api",
          protocol: "http:",
          port: 5000,
        },
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
