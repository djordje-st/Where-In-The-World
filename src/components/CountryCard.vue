<template>
  <div class="cardWrapper grid">
    <div v-for="country in countries" :key="country.name" class="card">
      <router-link :to="'/country/' + country.alpha3Code">
        <img :src="country.flag" :alt="country.name" />
        <div class="cardInfo">
          <h3>{{ country.name }}</h3>
          <p class="population">
            <span class="cardTitle">Population:</span>
            {{ country.population | numFormat }}
          </p>
          <p class="region">
            <span class="cardTitle">Region:</span>
            {{ country.region }}
          </p>
          <p class="capital">
            <span class="cardTitle">Capital:</span>
            {{ country.capital }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryCard",
  props: ["countries"]
};
</script>