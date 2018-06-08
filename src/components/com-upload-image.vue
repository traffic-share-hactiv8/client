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
            Cancle
          </router-link>
          </button>

      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      location: '',
      description: '',
      file: ''
    }
  },
  methods: {
    onHandlerFile() {
      this.file = this.$refs.file.files[0]
    },
    uploadImage() {
      let formData = new FormData()
      formData.append('location', this.location)
      formData.append('description', this.description)
      formData.append('file', this.file)
      this.$store.dispatch('uploadImage', formData)
    }
  }
}
</script>

<style lang="css">
</style>
