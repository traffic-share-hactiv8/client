import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const $http = 'http://localhost:3000/'

export default new Vuex.Store({
  state: {
    profileTimeline: [],
    statusLogin: true,
    statusLogout: false,
    homeTimeline: []
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
    },
    getHomeTimeline: function (state, payload) {
      state.homeTimeline = payload
    }
  },
  actions: {
    changeStLogin ({ commit }) {
      let objStatus = {
        login: false,
        logout: true
      }
      commit('changeStLogin', objStatus)
    },
    changeStLogout ({ commit }) {
      let objStatus = {
        logout: true,
        login: false
      }
      commit('changeStLogout', objStatus)
    },
    getProfileTimeline: function ({ commit }) {
      let url = $http + 'timelines/currentUser'
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(response => {
          commit('getProfileTimeline', response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getHomeTimeline: function ({ commit }) {
      let url = $http + 'timelines'
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(response => {
          commit('getHomeTimeline', response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getCoordinate: function ({commit}) {
      function convertToQuery (string) {
        let splitStr = string.split(',')
        let removeSpace = []
        splitStr.forEach(function (element) {
          removeSpace.push(element.trim())
        })
        let address = removeSpace.join(',')
        let addressSplit = address.split('')
        for (var i = 0; i < addressSplit.length; i++) {
          if (addressSplit[i] === ' ') {
            addressSplit[i] = '+'
          } else if (addressSplit[i] === ',') {
            addressSplit[i] = ',+'
          }
        }
        return addressSplit.join('')
      }
      let location = this.address
      let self = this
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${convertToQuery(location)}&key=AIzaSyBn11t_9j9am22Zuan7gHnFPk30MRAY7j4`)
        .then((response) => {
          console.log(response)
          self.longitude = response.data.results[0].geometry.location.lng
          self.latitude = response.data.results[0].geometry.location.lat
          console.log('LONGITUDE', self.longitude)
          console.log('LATITUDE', self.latitude)
        })
        .catch((err) => {
          console.log('ERROR ==> ', err)
        })
    }
  }
})

// actions: {
//   getAllImage({
//     commit,
//     state
//   }) {
//     let token = state.token
//     if (token === '') {
//       swal({
//         type: 'error',
//         title: 'Oops...',
//         text: 'authorization token is required!'
//       })
//     } else {
//       axios.get('http://localhost:3000/timelines', {
//         headers: {
//           authorization: localStorage.getItem('token')
//         }
//       })
//         .then(function (imageData) {
//           swal(
//             'Good job!',
//             'success get photo',
//             'success'
//           )
//           commit('setImages', imageData.data)
//         })
//         .catch(function (err) {
//           swal({
//             type: 'error',
//             title: 'Oops...',
//             text: err
//           })
//         })
//     }
//   }
// }
// })
