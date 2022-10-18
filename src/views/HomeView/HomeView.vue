<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <Example :msg="$t('example.welcome')" />
    <button @click="handleChangeLang">{{ $t("example.changeLang") }}</button>
  </div>
</template>

<script>
import Example from "@/components/Example/Example.vue";

export default {
  name: "HomeView",
  components: {
    Example,
  },
  methods: {
    handleChangeLang() {
      const isBR = this.$i18n.locale === "br";
      this.$i18n.locale = isBR ? "en" : "br";
    },
  },
};
</script>
