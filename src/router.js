import Vue from 'vue'
import Router from 'vue-router'
import cRegister from '@/components/com-register.vue'
import cLogin from '@/components/com-login.vue'

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
    }
  ]
})
