import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const $http = 'http://localhost:3000/'

export default new Vuex.Store({
  state: {
    profileTimeline: [
      {
        test: 'ahdahfdahfahdfhadfaf'
      }
    ],
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
    },
    getProfileTimeline: function (state, payload) {
      state.profileTimeline = payload
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
    },

    getProfileTimeline: function ({commit}) {
      let url = $http + 'timelines/currentUser'
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(response => {
          let timelines = response.timelines
          commit('getProfileTimeline', timelines)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
