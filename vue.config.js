// vue.config.js
module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },

  transpileDependencies: ["vuex-persist", "vue-i18n"],

  runtimeCompiler: true
};
