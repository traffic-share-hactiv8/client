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
        <v-flex v-for="image in homeTimeline.data.timelines" :key="image" xs12 sm6 md4>
          <v-card>
            <!-- <v-card-media :src="`https://picsum.photos/200/300?image=${getImage()}`" height="300px"></v-card-media> -->
            <v-card-media :src="image.imageUrl"  height="300px"></v-card-media>
            <v-card-title>
              <b>{{image.userId.name}} :</b>
              <i>
                {{image.description}}
              </i>
              <br>
              <span>
                <h6>Longitude {{image.longitude}}</h6>
                <h6>Latitude {{image.latitude}}</h6>
              </span>
              <div>
                <div id="map"></div>
              </div>
            </v-card-title>
            <v-card-actions class="white justify-center">
              <div  class="fb-share-button" 
                    data-href="image.imageUrl" 
                    data-layout="button_count" 
                    data-size="small" 
                    data-mobile-iframe="true">
                    <i>
                      share via
                    </i>
                  <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstorage.googleapis.com%2Fhappygram%2Fknight-gundam2.jpg&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
                    <i class="fab fa-facebook-f"></i>
                  </a>
              </div> 
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    {{homeTimeline.data.timelines}}
    </v-container>
  </v-card>
</template> 

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["profileTimeline", "statusLogout", "homeTimeline"])
  },

  methods: {
    initMap() {
      console.log("test", document.getElementById("map"));
      var latlng = new google.maps.LatLng(-6.251061699999999, 106.7816223);
      var map = new google.maps.Map(document.getElementById("map"), {
        center: latlng,
        zoom: 15
      });
      var trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    }
  },
  mounted() {
    this.$store.dispatch("getHomeTimeline");
    this.initMap();
    // res.send('adsfadfasd')
  }
};
</script>
<style scoped>
 /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 150px;
        width: 150px;
        
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
</style>