const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "/src/index.js",
  output: { path: path.resolve(__dirname, "dist"), clean: true },
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
        test: /\.scss|.css$/,
        use: [
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
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

    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    // new BundleAnalyzerPlugin
  ],
};
