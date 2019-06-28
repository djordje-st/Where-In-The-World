<template>
  <header>
    <div class="container">
      <router-link to="/">
        <h1>Where in the world?</h1>
      </router-link>
      <div class="themeToggleWrapper">
        <IosMoonIcon v-if="theme" w="25px" h="25px"/>
        <IosSunnyIcon v-else w="25px" h="25px"/>
        <button class="themeToggle" @click="toggle">{{ theme ? 'Dark Mode' : 'Light Mode' }}</button>
      </div>
    </div>
  </header>
</template>

<script>
import IosMoonIcon from "vue-ionicons/dist/ios-moon.vue";
import IosSunnyIcon from "vue-ionicons/dist/ios-sunny.vue";

export default {
  name: "Header",
  components: {
    IosMoonIcon,
    IosSunnyIcon
  },
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