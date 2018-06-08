import Vue from 'vue'
import Router from 'vue-router'
import cRegister from '@/components/com-register.vue'
import cLogin from '@/components/com-login.vue'
import cProfilTimeline from '@/components/com-profile-timeline.vue'
import cUploadImage from '@/components/com-upload-image.vue'
import cHome from '@/components/com-home-timeline.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: cLogin
    },
    {
      path: '/register',
      name: 'register',
      component: cRegister
    },
    {
      path: '/home',
      name: 'home',
      component: cHome
    },
    {
      path: '/profil-timeline',
      name: 'profil-timeline',
      component: cProfilTimeline
    },
    {
      path: '/upload-image',
      name: 'upload-image',
      component: cUploadImage
    }
  ]
})
