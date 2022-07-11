const CopyPlugin = require("copy-webpack-plugin");
const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  // // 打包时复制文件插件
  // plugins: [
  //   new CopyPlugin({
  //     patterns: [
  //       { from: "src/assest/*", to: "dist/public/assest" }
  //     ],
  //   }),
  // ],
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
  
})
