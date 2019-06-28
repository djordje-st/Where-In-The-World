<template>
  <header>
    <div class="container">
      <router-link to="/">
        <h1>Where in the world?</h1>
      </router-link>
      <button class="themeToggle" @click="toggle">{{ theme ? 'Dark Mode' : 'Light Mode' }}</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      lightTheme: true
    };
  },
  computed: {
    theme() {
      return this.$store.state.themeToggle;
    }
  },
  methods: {
    toggle() {
      this.$store.commit("themeToggle", this.lightTheme);
    }
  }
};
</script>