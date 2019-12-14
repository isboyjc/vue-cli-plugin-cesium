/*
 * @Author: isboyjc
 * @Date: 2019-12-14 19:39:35
 * @LastEditors: isboyjc
 * @LastEditTime: 2019-12-14 19:53:50
 * @Description: 提示代码，以供用户在命令行选择
 */
module.exports = [
  {
    name: `addWidgetsToMain`,
    type: 'confirm',
    message: 'Whether to import styles globally. This operation will automatically import widgets.css in main.js(是否全局引入样式,该操作将自动在main.js引入widgets.css)？',
    default: true,
  },{
    name: `addExample`,
    type: 'confirm',
    message: 'Whether to add sample components to the project components directory(是否添加示例组件到项目components目录)？',
    default: true,
  }
];