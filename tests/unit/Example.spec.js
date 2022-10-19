import { customShallowMount } from "../utils";
import Example from "@/components/Example/Example.vue";

describe("Example.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";

    const wrapper = customShallowMount(Example, {
      propsData: {
        msg,
      },
    });

    expect(wrapper.text()).toMatch(msg);
  });

  it("renders default msg when msn is not passed", () => {
    const wrapper = customShallowMount(Example, {});

    expect(wrapper.text()).toMatch(wrapper.vm.$t("example.msg"));
  });

  it("clicks on button count value should be add +1", () => {
    const wrapper = customShallowMount(Example, {});

    expect(wrapper.vm.count).toBe(0);
    wrapper.vm.handleCount();
    expect(wrapper.vm.count).toBe(1);
  });
});
