<template>
  <v-card flat tile>
    <v-toolbar color="grey" dark>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container fluid grid-list-md grey lighten-4>
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <!-- <v-flex v-for="card in cards" :key="card" xs12 sm6 md4> -->
        <v-flex v-for="image in profileTimeline.data.timelines" :key="image" xs12 sm6 md4>
          <v-card>
            <!-- <v-card-media :src="`https://picsum.photos/200/300?image=${getImage()}`" height="300px"></v-card-media> -->
            <v-card-media :src="image.imageUrl"  height="300px"></v-card-media>
            <v-card-title>
              {{image.description}}
            </v-card-title>
            <v-card-actions class="white justify-center">
              <div  class="fb-share-button" 
                    data-href="image.imageUrl" 
                    data-layout="button_count" 
                    data-size="small" 
                    data-mobile-iframe="true">
                  <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstorage.googleapis.com%2Fhappygram%2Fknight-gundam2.jpg&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
                    <i class="fab fa-facebook-f"></i>
                  </a>
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    <!-- {{profileTimeline.data.timelines}} -->
    </v-container>
  </v-card>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'profileTimeline',
        'statusLogout'

      ])
    },

    methods: {
      // getImage () {
      //   const min = 550
      //   const max = 560

      //   return Math.floor(Math.random() * (max - min + 1)) + min
      // },
     
    },
    mounted () {
      this.$store.dispatch('getProfileTimeline')
    }
  }
</script>
