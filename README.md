# vue-cli-plugin-cesium

<p align="center">
  <img src="https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/logobig.png" width="200px">
</p>
<p align="left">基于Vue-cli的cesium封装(Cesium encapsulation based on Vue cli)</p>
[![npm](https://img.shields.io/npm/v/vue-cli-plugin-cesium?style=plastic)](https://www.npmjs.com/package/vue-cli-plugin-cesium)
[![npm](https://img.shields.io/npm/dm/vue-cli-plugin-cesium?style=plastic)](https://www.npmjs.com/package/vue-cli-plugin-cesium)
[![license](https://img.shields.io/npm/l/vue-cli-plugin-cesium?style=plastic)](https://www.npmjs.com/package/vue-cli-plugin-cesium)
[![Github star](https://img.shields.io/github/stars/isboyjc/vue-cli-plugin-cesium?style=social)](https://github.com/isboyjc/vue-cli-plugin-cesium)
[![Github fork](https://img.shields.io/github/forks/isboyjc/vue-cli-plugin-cesium?style=social)](https://github.com/isboyjc/vue-cli-plugin-cesium)

### 前言

通常情况下，我们要在 vue 中使用 Cesium，首先要安装 Cesium，然后要在 vue-cli 的 webpack 配置很多东西，对一些有经验的人来说只不过麻烦些，但是对 Cesium 的初学者来说会很痛苦，因为没有使用过，也不知到要怎么配置，只能搜索网上的教程，一步一步踩坑

作为前端，我在学习 Cesium，踩坑无数，当然也经历过这些

其实不管是有经验或是初学者，每次写项目重复配置这些东西都很麻烦

vue-cli-plugin-cesium 就是为了解决这个问题

### 介绍

vue-cli-plugin-cesium 是一个针对 Cesium 的 vue-cli 扩展插件，使用它将会让我们在 vue-cli 中零配置使用 Cesium

它会在我们已经创建好的 vue-cli 中做基于 Cesium 的扩展，如下

- 自动安装 cesium 并追加至`package.json`依赖项(可自选版本)

- 自动扩展 vue-cli 中 cesium 相关的 webpack 配置
  - 添加一个`cesium`别名，以便我们在项目中轻松的引入它
  - 使 Cesium 对象实例可在每个 Vue 模块中使用而无须 import 引入
  - 使 webpack 可正常打包 Cesium
  - 允许 webpack 友好地在 Cesium 中使用 require，解决 require 引入警告
  - 开发环境生成 sourcemap，生产环境取消 sourcemap
  - 生产环境抽取公共模块执行压缩
  - 生产环境 loader 切换到优化模式
- 自动在全局 main.js 中引入`Widgets.css`，可选
- 自动在`components/`文件夹下生成示例文件，可选

### 安装

vue-cli-plugin-cesium 是基于 vue-cli 的扩展插件，所以在使用前要先安装 vue-cli，并使用 vue-cli 创建一个 vue 项目

如果您不了解 vue-cli 的使用，请移步官网 [vue-cli-官网](https://cli.vuejs.org/zh/guide/)

当前插件只支持`vue-cli3.0+`版本哦

创建好一个 vue 项目后就可以按照以下步骤使用该插件了

#### 使用方式一

首先是安装 vue-cli-plugin-cesium 插件，推荐使用 yarn 安装，因为它更简洁

```js
// npm
npm install --save-dev vue-cli-plugin-cesium

// yarn
yarn add vue-cli-plugin-cesium
```

安装完成后我们要使用 `vue invoke` 来初始化这个插件

```js
vue invoke vue-cli-plugin-cesium

// 非全局安装的vue-cli可以
npx vue invoke vue-cli-plugin-cesium
```

#### 使用方式二

如果您觉得使用方式一两步有些麻烦，您可以使用`vue add`的方式安装使用，即可一步到位

```js
vue add vue-cli-plugin-cesium

// 非全局安装的vue-cli可以
npx vue add vue-cli-plugin-cesium
```

#### 安装过程

在`vue invoke`或`vue add`的过程中会有三个询问

##### 询问一

```js
Please choose a version of 'cesium' from this list(请在列表中选择 cesium 的版本)
```

在此选择想使用的 `Cesium` 版本

##### 询问二

```js
Whether to import styles globally. This operation will automatically import widgets.css in main.js(是否全局引入样式,该操作将自动在main.js引入widgets.css)？
```

此项默认为 yes，该操作将自动在 main.js 引入 widgets.css，即全局引入 cesium 的 css 样式

如果此项设置为 no，那么将来开发时我们要手动引入`widgets.css`样式文件，引入命令如下

```js
import "cesium/Widgets/widgets.css"
```

##### 询问三

```js
Whether to add sample components to the project components directory(是否添加示例组件到项目components目录)?
```

此选项默认为 yes，该操作会自动在`src/components`文件夹下生成`CesiumExample`文件夹，此文件夹中包含一些 Cesium 的使用示例供参考

如果此项设置为 no，则不生成示例文件

生成的示例中每个文件为一个模块，可直接模块引入至项目中查看

### GUI 中安装

如果我们使用`vue ui`创建项目，也可以直接在项目创建后的插件选项里搜索 vue-cli-plugin-cesium 并安装

如下所示：

![gui001](https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/gui005.png)

选中插件点击安装

![gui002](https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/gui002.png)

### 使用

开发时如下，直接在模块中使用 Cesium 对象即可

![code01](https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/code01.png)

查看示例组件，模块引入即可，如下

![code02](https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/code02.png)

### 结束

安装完成后，就可以在 vue 项目中任意模块中使用 Cesium 了

你可以在每个 Vue 模块中直接使用 Cesium 对象实例而无须 import 引入

如果你想引入 cesium 包下的文件，我们为 cesium 包的目录设置了别名，就叫`cesium`

所以在引入`Widgets.css`时引入路径为`cesium/Widgets/widgets.css`

如果对您有所帮助，那么这将是我的荣幸

后期我会慢慢的完善此插件，并不停迭代，也欢迎大家提出建议，也欢迎 PR

如果您觉得还行，点个 star 再走哟
