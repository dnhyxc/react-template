/*
 * @Description: 开发配置
 * @Author: dnh
 * @Date: 2022-06-10 15:14:12
 * @LastEditors: dnh
 * @FilePath: \example\react\mobx\config\webpack.dev.config.js
 * @LastEditTime: 2022-06-10 19:23:53
 */
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    // filename: "js/bundle.js",
    filename: "js/[name]-bundle-[hash:6].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      /**
       * 使用两次less-loader解决开启css模块化时导致antd自定义主题失效的问题。
       * 需要在不开启模块化时，设置antd自定义主题才会生效，因此这一个less-loader使用include针对node_modules中的组件库（即antd）在不开启css模块化的情况下，开启自定义主题的设置。
       *
       */
      {
        test: /\.less$/,
        include: [/node_modules/],
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                sourceMap: true,
                modifyVars: {
                  "primary-color": "#1DA57A",
                  "link-color": "#1DA57A",
                  "border-radius-base": "2px",
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      /**
       * 该less-loader使用exclude排除node_modules中的组件库，只针对自己的代码开启css模块化
       */
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          "style-loader",
          // 配置less模块化导入
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          // 配置scss模块化导入
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
      hash: false,
    }),
  ],
  /**
   * devServer 配置说明：
   *  port: 端口号
   *  compress: 为每个静态文件开启gzip压缩
   */
  devServer: {
    port: 9000,
    compress: true,
    // 设置browserHistory路由模式时，防止出现404的情况
    historyApiFallback: true,
  },
  devtool: "eval-cheap-module-source-map",
});
