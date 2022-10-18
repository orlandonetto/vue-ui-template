import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueI18n from "vue-i18n";
import Example from "@/components/Example/Example.vue";

const messages = {
  br: require("@/locales/br.json"),
  en: require("@/locales/en.json"),
};

describe("Example.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueI18n);

  let i18n;

  beforeEach(() => {
    i18n = new VueI18n({
      locale: "br",
      fallbackLocale: "br",
      messages,
    });
  });

  it("renders props.msg when passed", () => {
    const msg = "new message";

    const wrapper = shallowMount(Example, {
      localVue,
      i18n,
      propsData: {
        msg,
      },
    });

    expect(wrapper.text()).toMatch(msg);
  });

  it("renders default msg when msn is not passed", () => {
    const wrapper = shallowMount(Example, {
      localVue,
      i18n,
    });

    expect(wrapper.text()).toMatch(wrapper.vm.$t("example.msg"));
  });

  it("clicks on button count value should be add +1", () => {
    const wrapper = shallowMount(Example, {
      localVue,
      i18n,
      propsData: {},
    });

    expect(wrapper.vm.count).toBe(0);
    wrapper.vm.handleCount();
    expect(wrapper.vm.count).toBe(1);
  });
});
