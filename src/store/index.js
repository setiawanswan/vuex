import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message : 'Hello Vuex'
  },
  mutations: {
    updateMessage(state, value){
      state.message = value
    }
  },
  actions: {
    updateWithNewMessage( {commit }, value){
      commit('updateMessage', value)
    }
  },
  modules: {
  }
})
