<template>
  <h3>{{ msg }}</h3>
</template>

<script>
export default {
  name: "ExampleComponent",
  props: {
    msg: {
      type: String,
      default: () => this.$t("example.msg"),
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
