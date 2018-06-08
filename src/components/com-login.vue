<template>
  <v-container>
    <v-form>
      <v-text-field v-model="username" label="Username" required ></v-text-field>
      <v-text-field v-model="password" label="Password" required type="password"></v-text-field>
    </v-form>
    <button type="button" class="btn btn-success elevation-9" @click="login">sign in</button>
    <!-- <cLoginMedsos/> -->
  </v-container>
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'
// import cLoginMedsos from './com-loginMedsos.vue'

const vhttp = 'http://localhost:3000/'
// const vhttp = 'https://todoserver.yasirjs.com/'

export default {
  data () {
    return {
      username: null,
      password: null
    }
  },

  components: {
    // cLoginMedsos
  },

  methods: {
    valLogin: function () {
      // let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      // let cekEmail = regEx.test(String(this.email).toLowerCase())
      if (this.username === '') {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Email must be filled'
        })
        return false
      // } else if (!cekEmail) {
      //   swal({
      //     icon: 'error',
      //     title: 'Oops',
      //     text: 'Email format is Wrong'
      //   })
      //   return false
      } else if (this.password === '') {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Password must be filled'
        })
        return false
      } else {
        return true
      }
    },
    login () {
      let cek = this.valLogin()
      let url = `${vhttp}login`
      if (cek) {
        axios
          .post(url, {
            username: this.username,
            password: this.password
          })
          .then(response => {
            let token = response.data.token
            if (token) {
              localStorage.setItem('token', token)
              swal('Sign In', 'Sign Ip successfully', 'success')

              this.$store.dispatch('changeStLogin')
              this.$router.push('/home')
            }
          })
          .catch(error => {
            console.log(error)
            swal({
              icon: 'error',
              title: 'Oops',
              text: 'email or password is wrong'
            })
          })
      }
    }
  }
}
</script>
