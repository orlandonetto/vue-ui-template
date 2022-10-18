const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

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
