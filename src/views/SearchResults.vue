<template>
  <div class="searchResults">
    <div v-if="loading" class="loading">
      <IosRefreshIcon w="60px" h="60px" animate="rotate" />
    </div>
    <center v-if="!loading">
      <h1 v-if="results.length > 0">Search results for "{{ search }}".</h1>
      <h1 v-else>Sorry, no results for "{{ search }}."</h1>
    </center>
    <CountryCard :countries="results" />
  </div>
</template>

<script>
import CountryCard from "@/components/CountryCard";
import IosRefreshIcon from "vue-ionicons/dist/ios-refresh.vue";

export default {
  name: "SearchResults",
  components: {
    CountryCard,
    IosRefreshIcon
  },
  data() {
    return {
      results: [],
      loading: true
    };
  },
  computed: {
    search() {
      return this.$store.state.searchTerm;
    }
  },
  created() {
    this.$axios
      .get(`https://restcountries.eu/rest/v2/name/${this.search}`)
      .then(res => {
        if (this.results.length > 0) {
          this.loading = false;
          this.results = res.data;
        }
      })
      .catch(err => {
        console.error(err);
        this.loading = false;
      });
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 3rem;
}
</style>
