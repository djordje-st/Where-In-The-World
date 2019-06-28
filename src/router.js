import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Country from './views/Country.vue'
import SearchResults from './views/SearchResults.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/country/:id',
      name: 'country',
      component: Country
    }
    ,
    {
      path: '/search',
      name: 'search',
      component: SearchResults
    }
  ]
})
