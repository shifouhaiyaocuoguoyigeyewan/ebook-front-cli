const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  // 去掉打包生成的.map 文件
  productionSourceMap:false,
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

  devServer: {
    host:'',
    port: 8080,
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
