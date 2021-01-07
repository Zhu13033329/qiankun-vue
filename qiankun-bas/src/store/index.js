import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'zhu',
      age: 20
    }
  },
  mutations: {
    changeUser(state, params) {
      console.log(1313131, params);
      state.user.name = params;
    },
    // changeName(state, params) {

    // }
  },
  actions: {
  },
  modules: {
  }
})
