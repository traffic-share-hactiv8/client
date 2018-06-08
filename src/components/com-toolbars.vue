<template>
  <v-toolbar color="black" height="90px">
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>
      <router-link to="/">
        <img src="https://storage.googleapis.com/happygram/trafficIcon.png" alt="logo" style="height:60px">
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
        </v-btn>
        <router-link to="/upload-image">
          <v-btn color="red" class="warning elevation-9" v-if="statusLogout">
            upload image
          </v-btn>
        </router-link>
        <router-link to="/">
          <v-btn color="yellow" class="warning elevation-9" @click="logout" v-if="statusLogout">
            sign out
          </v-btn>
        </router-link>
        <router-link to="/register" v-if="statusLogin">
          <v-btn flat style="color:white">
            sign up
          </v-btn>
        </router-link>
        <router-link to="/">
          <v-btn color="green" class="success elevation-9" v-if="statusLogin">
            sign in
          </v-btn>
        </router-link>
      </v-toolbar-items>
    <!-- {{statusLogout}} -->
    </div>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'statusLogin',
      'statusLogout'
    ])
  },

  methods: {
    upload: function (){

    },
    logout: function () {
      localStorage.removeItem('token')
      this.$store.dispatch('changeStLogout')
      this.$router.push('/login')
    }
  }
}
</script>
