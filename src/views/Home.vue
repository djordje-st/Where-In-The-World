<template>
  <div class="home">
    <div v-if="loading" class="loading">
      <IosRefreshIcon w="60px" h="60px" animate="rotate" />
    </div>
    <main v-if="!loading">
      <div class="search">
        <form @submit.prevent="searchCountries">
          <IosSearchIcon w="20px" h="20px" />
          <input
            type="text"
            name="seach_countries"
            v-model="searchTerm"
            placeholder="Search for a country..."
          />
        </form>
        <select @change="filterCountry" v-model="filterOption" name="region" id="region">
          <option selected disabled value="filter">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div class="countryWrapper">
        <CountryCard v-if="filter.length > 1" :countries="filter" />
        <CountryCard v-else :countries="allCountries" />
      </div>
    </main>
  </div>
</template>

<script>
import CountryCard from "@/components/CountryCard";
import IosSearchIcon from "vue-ionicons/dist/ios-search.vue";
import IosRefreshIcon from "vue-ionicons/dist/ios-refresh.vue";

export default {
  name: "Home",
  components: {
    CountryCard,
    IosSearchIcon,
    IosRefreshIcon
  },
  data() {
    return {
      searchTerm: "",
      allCountries: [],
      filterOption: "filter",
      filter: [],
      loading: true
    };
  },
  mounted() {
    this.$axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        this.allCountries = res.data;
        this.loading = false;
      })
      .catch(err => console.error(err));
  },
  methods: {
    searchCountries(e) {
      if (this.searchTerm.length < 1) {
        e.preventDefault();
      } else {
        this.$router.push(`/search`);
        this.$store.commit("searchTerm", this.searchTerm);
      }
    },
    filterCountry() {
      this.$axios
        .get(`https://restcountries.eu/rest/v2/region/${this.filterOption}`)
        .then(res => {
          this.filter = res.data;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>