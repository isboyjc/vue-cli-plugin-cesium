/*
 * @Author: isboyjc
 * @Date: 2019-12-28 09:37:43
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-28 12:24:45
 * @Description: 
 */
module.exports = {
  // 主题
  theme: 'reco',
  title: 'vue-cli-plugin-cesium',
  description: 'Vue + Cesium 的免配置开发体验',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [ 
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['link', { rel: 'manifest', href: '/images/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/logo.png' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  // 是否开启 PWA
  serviceWorker: true, 
  // 部署到github相关的配置
  base: '/vue-cli-plugin-cesium/', 
  markdown: {
    // 代码块是否显示行号
    lineNumbers: false 
  },
  // 插件配置
  // 滚动插件
  plugins: [
    // 最后更新时间插件
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
    // 导航点击滚动效果插件
    ['vuepress-plugin-smooth-scroll']
  ],
  themeConfig: {
    // 项目开始时间，只填写年份
    startYear: '2019',
    author: 'isboyjc',
    // logo
    logo: 'images/logo.png', 
    lastUpdated: '上次更新时间',
    // valine评论
    valineConfig: {
      appId: 'ryLXrLDT4NGPR5qMU7VrpQQf-gzGzoHsz',
      appKey: 'PDaPph76mYltfvja4giSQP0W',
    },
    // 导航栏配置
    nav:[ 
      {text: 'Github', link: 'https://github.com/isboyjc/vue-cli-plugin-cesium'}      
    ],
    // 侧边栏配置
    sidebar: 'auto', 
    // 侧边栏显示2级
    sidebarDepth: 2, 
    // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
    displayAllHeaders: false, 
    // 默认值：true 滚动时通过 hash 高亮侧边栏标题
    activeHeaderLinks: true, 
  }
};