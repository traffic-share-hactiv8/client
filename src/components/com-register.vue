<template>
  <v-container>
    <v-form>
      <v-text-field v-model="name" label="Name" required ></v-text-field>
      <v-text-field v-model="email" label="E-mail" required ></v-text-field>
      <v-text-field v-model="password" label="Password" required type="password"></v-text-field>
    </v-form>
    <button type="button" class="btn btn-success elevation-9" @click="signup">sign up</button>
    <!-- <cLoginMedsos/> -->
  </v-container>
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'
// import cLoginMedsos from './com-loginMedsos.vue'

// const vhttp = 'http://localhost:3000/'
const vhttp = 'https://todoserver.yasirjs.com/'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },

  components: {
    // cLoginMedsos
  },

  methods: {
    valSignup: function () {
      let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let cekEmail = regEx.test(String(this.email).toLowerCase())
      let cekPass = this.password.match(/[0-9]/g)
      if (this.email === '') {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Email must be filled'
        })
        return false
      } else if (!cekEmail) {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Email format is Wrong'
        })
        return false
      } else if (this.name === '') {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Name must be input'
        })
        return false
      } else if (this.password === '') {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Password must be filled'
        })
        return false
      } else if (this.password.length < 5) {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Password minimal 5 digit'
        })
        return false
      } else if (!cekPass) {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Password must contained Number'
        })
        return false
      } else {
        return true
      }
    },

    signup: function () {
      let cek = this.valSignup()
      let url = `${vhttp}users/signup`

      if (cek) {
        let newUser = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        axios
          .post(url, newUser)
          .then(response => {
            swal('Sign Up', 'you sign up successfully, please log in', 'success')
            this.$router.push('/login')
          })
          .catch(error => {
            console.error(error)
            swal({
              icon: 'error',
              title: 'Oops...',
              text: 'Email is not available!'
            })
          })
      }
    }

  }
}
</script>
