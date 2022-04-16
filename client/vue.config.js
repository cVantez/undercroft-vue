const { defineConfig } = require('@vue/cli-service');
const path = require('path');

// const hostname = process.env.HOSTNAME;
process.env.VUE_APP_VERSION = process.env.npm_package_version;
process.env.VUE_APP_BUILD_DATE = new Date().toISOString();

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, '../server/public'),
  configureWebpack: {
    devtool: false,
    devServer: {
      watchOptions: {
        ignored: /node_modules/
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          quietDeps: true
        }
      }
    }
  }
});
