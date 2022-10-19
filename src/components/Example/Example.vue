<template>
  <div>
    <h3>{{ msg }}</h3>
    <span data-test-count-value>{{ count }}</span>
    <v-btn data-test-count-btn @click="handleCount">+</v-btn>
  </div>
</template>

<script>
export default {
  name: "ExampleComponent",
  props: {
    msg: {
      type: String,
      default: function () {
        return this.$t("example.msg");
      },
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleCount() {
      this.count++;
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
