import Vue from 'vue'
import Router from 'vue-router'
// import Store from '@/store'
import Home from '@/views/Home'
import Template from '@/views/Template'
import EmailEditor from '@/views/EmailEditor'

Vue.use(Router)

// const ifAuthenticated = (to, from, next) => {
//   if (Store.getters.loggedUser) {
//     next()
//     return
//   }
//   next('/')
// }

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: '404',
      component: Home
    },
    {
      path: '/template',
      name: 'template',
      component: Template
    },
    {
      path: '/editor',
      name: 'editor',
      component: EmailEditor
    }
  ]
})
