<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <Example msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Example from "@/components/Example/Example.vue";

export default {
  name: "HomeView",
  components: {
    Example,
  },
};
</script>
