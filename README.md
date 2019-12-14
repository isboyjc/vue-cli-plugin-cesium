# vue-cli-plugin-cesium
基于Vue-cli的cesium封装(Cesium encapsulation based on Vue cli)



### 前言

通常情况下，我们要在vue中使用Cesium，首先要安装Cesium，然后要在vue-cli的webpack配置很多东西，对一些有经验的人来说只不过麻烦些，但是对Cesium的初学者来说会很痛苦，因为没有使用过，也不知到要怎么配置，只能搜索网上的教程，一步一步踩坑

其实不管是有经验或是初学者，每次写项目重复配置这些东西都很麻烦

vue-cli-plugin-cesium就是为了解决这个问题



### 介绍

vue-cli-plugin-cesium是一个针对Cesium的vue-cli扩展插件，使用它将会让我们在vue-cli中零配置使用Cesium

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
- 自动在`components/`文件夹下生成示例文件，可选



### 使用

安装

```js
// npm
npm install --save-dev vue-cli-plugin-cesium

// yarn
yarn add vue-cli-plugin-cesium
```



调用

```js
vue invoke vue-cli-plugin-cesium
```

