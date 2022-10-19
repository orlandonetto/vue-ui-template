import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import i18n from "./i18n";
import vuetify from "./plugins/vuetify";

import "@/styles/main.scss";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

if (window.Cypress) {
  window.app = app;
}
