// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/security-application-main/" : "/",

  configureWebpack: {
    devtool: "source-map"
  },

  transpileDependencies: ["vuex-persist", "vue-i18n"],

  runtimeCompiler: true
};
