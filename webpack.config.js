// const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin")
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  //   entry: "/src/index.js",
  //   output: { path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf|eot|woff|woff2|eot|ico)$/i,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets",
        },
      ],
    }),

    // new HtmlWebPackPlugin({
    //     template: "./src/index.html"
    // }),
    // new BundleAnalyzerPlugin
  ],
};
