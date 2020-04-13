/*
 * @Author: isboyjc
 * @Date: 2019-12-14 16:37:27
 * @LastEditors: isboyjc
 * @LastEditTime: 2020-04-13 13:44:23
 * @Description: service plugin 修改webpack配置
 */
const path = require("path")
const webpack = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const cesiumSource = "node_modules/cesium/Source"
const cesiumWorkers = "../Build/Cesium/Workers"

module.exports = (api, opts) => {
  // 详情请看 https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#service-%E6%8F%92%E4%BB%B6
  api.configureWebpack(webpackConfig => {
    // 修改 webpack 配置
    // 或返回通过 webpack-merge 合并的配置对象
    let configureWebpack = {
      resolve: {
        alias: {
          // 添加一个cesium别名，以便我们在项目中轻松的引入它
          cesium: api.resolve(cesiumSource)
        }
      },
      amd: {
        // Cesium源码模块化使用的requireJs
        // 此配置允许webpack友好地在铯中使用require，使webpack打包cesium
        // 告诉Cesium, AMD的webpack版本用来评估要求的声明是不符合标准的toUrl功能
        toUrlUndefined: true
      },
      module: {
        // 解决require引入警告
        unknownContextCritical: false
      },
      plugins: [
        new webpack.DefinePlugin({
          // 在cesium中定义用于加载资源的相对基路径
          CESIUM_BASE_URL: JSON.stringify(opts.publicPath || "")
        }),
        // 对build生效，拷贝到dist目录下。如：dist/Assets
        new CopyWebpackPlugin([
          {
            from: path.join(cesiumSource, cesiumWorkers),
            to: "Workers"
          },
          {
            from: path.join(cesiumSource, "Assets"),
            to: "Assets"
          },
          {
            from: path.join(cesiumSource, "Widgets"),
            to: "Widgets"
          },
          {
            from: path.join(cesiumSource, "ThirdParty"),
            to: "ThirdParty"
          }
        ]),
        // 使Cesium对象实例可在每个js中使用而无须import
        new webpack.ProvidePlugin({
          Cesium: ["cesium/Cesium"]
        })
      ],
      optimization: {
        // 抽取公共模块执行压缩
        minimize: process.env.NODE_ENV === "production" ? true : false
      },
      // sourcemap生成
      devtool: process.env.NODE_ENV === "production" ? false : "#source-map"
    }

    if (process.env.NODE_ENV === "production") {
      configureWebpack.plugins = (configureWebpack.plugins || []).concat([
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.LoaderOptionsPlugin({
          // loader 切换到优化模式
          minimize: true
        })
      ])
    }

    // 返回配置对象，会通过webpack-merge合并到cli默认webpack配置
    return configureWebpack
  })
}
