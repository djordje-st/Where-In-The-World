import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('vue-ionicons/ionicons.css')
import numFormat from 'vue-filter-number-format';
 
Vue.filter('numFormat', numFormat);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
