<template>
  <div class="searchResults">
    <div v-if="loading" class="loading">
      <IosRefreshIcon w="60px" h="60px" animate="rotate"/>
    </div>
    <center v-if="!loading">
      <h1>Search results for "{{ search }}".</h1>
    </center>
    <CountryCard :countries="results"/>
  </div>
</template>

<script>
import axios from "axios";
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
    axios
      .get(`https://restcountries.eu/rest/v2/name/${this.search}`)
      .then(res => {
        this.results = res.data;
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
