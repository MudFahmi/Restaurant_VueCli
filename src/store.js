import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar: true,
  },
  mutations: {

    change_sidebar(state, payload){

      state.sidebar = payload

    } 

  },
  actions: {
    sideBar({commit},value){
      commit('change_sidebar',value)
    }

  },

 getters: {

  sidebar: state => state.sidebar,
 }
})
