<template>
  <div id="app" :class="theme ? 'light' : 'dark'">
    <Header/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header
  },
  computed: {
    theme() {
      return this.$store.state.themeToggle;
    }
  }
};
</script>

<style lang="scss">
@import "@/main.scss";
</style>
