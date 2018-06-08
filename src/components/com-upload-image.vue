<template lang="html">
  <v-container>
    <div class="modal-content">
      <div class="modal-header">
        <router-link to="/home">
        <button type="button" class="close" data-dismiss="modal">
          &times;
        </button>
        </router-link>
        <h4 class="modal-title">UPLOAD</h4>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label>File Photo:</label>
          <input class="form-control" type="file" @change="onHandlerFile" ref="file" accept="image/*">
        </div>
        <div class="form-group">
          <label>Location:</label>
          <input type="text" class="form-control" v-model="location">
        </div>
        <div class="form-group">
          <label>Description:</label>
          <textarea class="form-control" rows="4" cols="50" v-model="description"></textarea>
        </div>
        <button type="submit" class="btn btn-warning" @click="uploadImage">UPLOAD</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">
          <router-link to="/home">
            Cancel
          </router-link>
          </button>

      </div>
    </div>
  </v-container>
</template>

<script>
import swal from 'sweetalert2'
import axios from 'axios'
export default {
  name: "home",
  data() {
    return {
      location: "",
      description: "",
      file: ""
    };
  },
  methods: {
    onHandlerFile() {
      this.file = this.$refs.file.files[0];
    },
    uploadImage() {
      // console.log(this.file)
      let formData = new FormData();
      formData.append("location", this.location);
      formData.append("description", this.description);
      formData.append("image", this.file);
      axios
        .post("http://localhost:3000/timelines", formData, {
          'Content-Type': 'multipart/form-data',
          headers: {
            authorization: localStorage.getItem("token")
          }
        })
        .then(function(response) {
          swal("Good job!", "success upload photo", "success");
        })
        .catch(function(err) {
          swal({
            type: "error",
            title: "Oops...",
            text: err
          });
        });
    }
  }
};
</script>

<style lang="css">
</style>
