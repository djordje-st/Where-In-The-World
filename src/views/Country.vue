<template>
  <div class="countryWrapper">
    <div v-if="loading" class="loading">
      <IosRefreshIcon w="60px" h="60px" animate="rotate"/>
    </div>
    <router-link v-if="!loading" class="back" to="/">
      <IosArrowRoundBackIcon w="25px" h="25px"/>
      <span>Back</span>
    </router-link>
    <div v-if="!loading" class="country">
      <img :src="country.flag" :alt="country.name">
      <div class="countryInfo">
        <h1>{{ country.name }}</h1>
        <div class="countryMeta">
          <p>
            <span class="title">Native Name:</span>
            {{ country.nativeName }}
          </p>
          <p>
            <span class="title">Population:</span>
            {{ country.population | numFormat }}
          </p>
          <p>
            <span class="title">Region:</span>
            {{ country.region }}
          </p>
          <p>
            <span class="title">Sub Region:</span>
            {{ country.subregion }}
          </p>
          <p>
            <span class="title">Top Level Domain:</span>
            {{ country.topLevelDomain[0] }}
          </p>
          <p>
            <span class="title">Currencies:</span>
            <span
              class="mx-1"
              v-for="currency in country.currencies"
              :key="currency.code"
            >{{ currency.name }}</span>
          </p>
          <p>
            <span class="title">Languages:</span>
            <span
              class="mx-1"
              v-for="lang in country.languages"
              :key="lang.nativeName"
            >{{ lang.name }}</span>
          </p>
        </div>

        <div class="borders" v-if="country.borders.length > 0">
          <p>
            <span class="title">Border Countries:</span>
            <span v-for="(border, i) in country.borders" :key="i" class="chip mx-1">{{ border }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IosArrowRoundBackIcon from "vue-ionicons/dist/ios-arrow-round-back.vue";
import IosRefreshIcon from "vue-ionicons/dist/ios-refresh.vue";

export default {
  name: "Country",
  components: {
    IosArrowRoundBackIcon,
    IosRefreshIcon
  },
  data() {
    return {
      country: {},
      loading: true
    };
  },
  created() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/callingcode/${this.$route.params.id}`
      )
      .then(res => {
        this.country = res.data[0];
        this.loading = false;
      })
      .catch(err => console.error(err));
  }
};
</script>