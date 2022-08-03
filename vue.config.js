const CopyPlugin = require("copy-webpack-plugin");
const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  // 禁用esLint检查
  lintOnSave: false,
  // 配置jquery
  chainWebpack: (config) => {
    //引入ProvidePlugin
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        $: "jquery",
        jquery: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      },
    ]);
  },

  // devServer: {
  //   // 配置服务器代理
  //   proxy: {
  //     "/": { // 代理接口前缀为/apis的请求
  //       "target": 'http://localhost:3000/', // 对应的代理地址
  //       "secure": false, // 接受运行在https上，默认不接受
  //       "changeOrigin": true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
  //       "pathRewrite": { //重写路径 比如'/apis/aaa/ccc'重写为'/aaa/ccc'
  //         '^/api': ''
  //       }
  //     },
  //     // 配置多个代理
  //     "/service": {
  //       "target": 'https://www.google.com/',
  //       "secure": false,
  //       "changeOrigin": true,
  //     },
  //   }
  // },

  devServer: {

    // host: '',
    port: 8080,
    // open: true,
    // overlay: {
    // warnings: false,
    //  errors: true
    // },
    proxy: {
      "/book": {
        target: 'http://huadajiyin_book.wdsjxiaochen.xin/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/book": "/book"
        }
      },
    },
  },

})
