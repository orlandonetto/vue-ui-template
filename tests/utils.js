import { createLocalVue, mount, shallowMount } from "@vue/test-utils";

import VueI18n from "vue-i18n";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import store from "@/store";

const messages = {
  br: require("@/locales/br.json"),
  en: require("@/locales/en.json"),
};

export function customLocalVue() {
  const localVue = createLocalVue();
  localVue.use(VueI18n);
  return localVue;
}

function buildDefaultOptions() {
  const localVue = customLocalVue();
  const vuetify = new Vuetify();

  const i18n = new VueI18n({
    locale: "br",
    fallbackLocale: "br",
    messages,
  });

  localVue.use(VueRouter);
  const router = new VueRouter();

  return {
    localVue,
    router,
    store,
    i18n,
    vuetify,
  };
}

export function customShallowMount(component, options) {
  return shallowMount(component, {
    ...buildDefaultOptions(),
    ...options,
  });
}

export function customMount(component, options) {
  return mount(component, {
    ...buildDefaultOptions(),
    ...options,
  });
}
