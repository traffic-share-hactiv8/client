import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusLogin: true,
    statusLogout: false
  },
  mutations: {
    changeStLogin: function (state, payload) {
      state.statusLogin = payload.login
      state.statusLogout = payload.logout
    },
    changeStLogout: function (state, payload) {
      state.statusLogin = payload.login
      state.statusLogout = payload.logout
    }
  },
  actions: {
    changeStLogin ({commit}) {
      let objStatus = {
        login: false,
        logout: true
      }
      commit('changeStLogin', objStatus)
    },

    changeStLogout ({commit}) {
      let objStatus = {
        login: true,
        logout: false
      }
      commit('changeStLogout', objStatus)
    }
  }
})
