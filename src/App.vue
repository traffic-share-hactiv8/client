<template>
  <div id="app">
    <div id="nav">
      <cToolbar/>
        <router-view/>
      <cFooter/>
    </div>
  </div>
</template>

<script>
import cToolbar from '@/components/com-toolbars.vue'
import cFooter from '@/components/com-footer.vue'

export default {
  components: {
    cToolbar,
    cFooter
  }
}
</script>
