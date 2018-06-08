import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'

Vue.use(Vuex)

const $http = 'http://localhost:3000/'

export default new Vuex.Store({
      state: {
        profileTimeline: [{
          test: 'ahdahfdahfahdfhadfaf'
        }],
        statusLogin: true,
        statusLogout: false,
        images: []
      },
      mutations: {
        getAllImage: function (state, payload) {
          state.images = payload.map(val => val)
        },
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
        setImages(state, imageData) {
          state.images = imageData
        }
      },

      actions: {
        changeStLogin({
          commit
        }) {
          let objStatus = {
            login: false,
            logout: true
          }
          commit('changeStLogin', objStatus)
        },

        changeStLogout({
          commit
        }) {
          let objStatus = {
            login: true,
            logout: false
          }
          commit('changeStLogout', objStatus)
        },

        getProfileTimeline: function ({
          commit
        }) {
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
            }),

            uploadImage ({
              state,
              dispatch
            }, formData){
              let token = state.token
              if (token === '') {
                alert('authorization token is required')
              } else {
                axios.post('http://localhost:3000/timelines', formData, {
                  headers: {
                    authorization: localStorage.getItem('token')
                  }
                })
                  .then(function (response) {
                    swal(
                      'Good job!',
                      'success upload photo',
                      'success'
                    )
                    dispatch('getAllImage')
                  })
                  .catch(function (err) {
                    swal({
                      type: 'error',
                      title: 'Oops...',
                      text: err
                    })
                  })
              }
            },

            getAllImage({
              commit,
              state
            }) {
              let token = state.token
              if(token === '') {
                swal({
                  type: 'error',
                  title: 'Oops...',
                  text: 'authorization token is required!'
                })
              } else {
                axios.get('http://localhost:3000/timelines', {
                    headers: {
                      authorization: localStorage.getItem('token')
                    }
                  })
                  .then(function (imageData) {
                    swal(
                      'Good job!',
                      'success get photo',
                      'success'
                    )
                    commit('setImages', imageData.data)
                  })
                  .catch(function (err) {
                    swal({
                      type: 'error',
                      title: 'Oops...',
                      text: err
                    })
                  })
              }

            }
        }
      })
