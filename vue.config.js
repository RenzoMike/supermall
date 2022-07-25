const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 解决路径相关的问题
    resolve: {
      // 路径别名配置
      alias: {
        'components': '@/components',
        'utils': '@/utils',
        'views': '@/views',
        'common': '@/common',
        'network': '@/network',
        'utils': '@/utils',
      }
    }
  }
})
