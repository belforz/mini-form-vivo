const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader",
            "postcss-loader",
          ],
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
        inject: "body",
      }),
      new DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(argv.mode),
      }),
      !isProduction && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    devtool: isProduction ? 'source-map' : "eval-cheap-module-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 9000,
      open: true,
      hot: true,
    },
    optimization: {
      minimize: isProduction,
    },
    mode: isProduction ? "production" : "development",
  };
};
