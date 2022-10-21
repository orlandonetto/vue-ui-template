const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/main.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    ["vue-modules", "vue", "normal-modules", "normal"].forEach((match) => {
      config.module
        .rule("sass")
        .oneOf(match)
        .use("sass-loader")
        .tap((opt) =>
          Object.assign(opt, {
            additionalData: `@import '~@/styles/main.scss'`,
          })
        );
    });
  },
  pluginOptions: {
    i18n: {
      locale: "br",
      fallbackLocale: "br",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false,
    },
  },
});
