import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchTerm: '',
    themeToggle: null
  },
  mutations: {
    searchTerm(state, payload) {
      state.searchTerm = payload
    },
    themeToggle(state) {
      state.themeToggle = !state.themeToggle
    }
  }
})
