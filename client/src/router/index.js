import Vue from 'vue'
import Router from 'vue-router'
import client from '@/components/cadastro/client'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: client
    }
  ]
})
