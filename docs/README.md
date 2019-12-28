---
home: true
heroImage: /images/logo.png
isShowTitleInHome: false
actionText: 快速上手 →
actionLink: info.html
features:
- title: 是什么
  details: vue-cli-plugin-cesium是一款vue-cli的Cesium扩展插件，可在新项目或旧项目中使用，当然必须是vue-cli项目
- title: 做什么
  details: 解决了在Vue中使用Cesium的诸多配置问题，享受 Vue + Cesium 的免配置开发体验，只需安装此插件一步即可
- title: 扩展
  details: 后期会在该插件中扩展通用组件及示例，让Vue+Cesium开发更圆滑，欢迎star，欢迎PR
---





<!-- ::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
::: -->

<!-- ``` cmd
	yarn add vue-cli-plugin-cesium
``` -->





<!-- # vue-cli-plugin-cesium -->

<!-- <p align="center">
  <img src="https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/logobig.png" width="200px">
</p> -->
<!-- <p align="left">基于Vue-cli的cesium封装(Cesium encapsulation based on Vue cli)</p>

[![npm](https://img.shields.io/npm/v/vue-cli-plugin-cesium?style=plastic)](https://www.npmjs.com/package/vue-cli-plugin-cesium)
[![npm](https://img.shields.io/npm/dm/vue-cli-plugin-cesium?style=plastic)](https://www.npmjs.com/package/vue-cli-plugin-cesium)
[![license](https://img.shields.io/npm/l/vue-cli-plugin-cesium?style=plastic)](https://www.npmjs.com/package/vue-cli-plugin-cesium)
[![Github star](https://img.shields.io/github/stars/isboyjc/vue-cli-plugin-cesium?style=social)](https://github.com/isboyjc/vue-cli-plugin-cesium)
[![Github fork](https://img.shields.io/github/forks/isboyjc/vue-cli-plugin-cesium?style=social)](https://github.com/isboyjc/vue-cli-plugin-cesium) -->



<!-- vue-cli-plugin-cesium是一个针对Cesium的vue-cli扩展插件，使用它将会让我们在vue-cli中零配置使用Cesium

它会在我们已经创建好的vue-cli中做基于Cesium的扩展，如下

- 自动安装cesium并追加至`package.json`依赖项

- 自动扩展vue-cli中cesium相关的webpack配置
  - 添加一个`cesium`别名，以便我们在项目中轻松的引入它
  - 使Cesium对象实例可在每个Vue模块中使用而无须import引入
  - 使webpack可正常打包Cesium
  - 允许webpack友好地在Cesium中使用require，解决require引入警告
  - 开发环境生成sourcemap，生产环境取消sourcemap
  - 生产环境抽取公共模块执行压缩
  - 生产环境loader切换到优化模式
- 自动在全局main.js中引入`Widgets.css`，可选
- 自动在`components/`文件夹下生成示例文件，可选 -->