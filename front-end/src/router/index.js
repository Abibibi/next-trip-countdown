/* eslint-disable */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'
import axios from 'axios'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'home',
    meta: {
      requiresVisitor: true
    },
    component: Home
  },
  {
    path: '/',
    name: 'welcome',
    meta: {
      requiresAuth: true
    },
    component: Welcome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  axios.get(`${process.env.VUE_APP_API}/users/checkExistingUser`, { withCredentials: true })
    .then((response) => {
      console.log(response)
      store.commit('userInfoReceived', response.data)

      // at this point, the user is already authenticated
      // if they try to reach the page
      // accessible to non-authenticated users,
      // they are redirected to the authenticated page
      if (to.matched.some(record => record.meta.requiresVisitor)) {
        next({
          name: 'welcome'
        })
      // if an authenticated user tries to access
      // a page for authentificated users,
      // they can access it
      } else {
        next()
      }
    })
    .catch((error) => {
      console.log(error)
      store.commit('userDeleted')

      // at this point, the user is not authenticated
      // if they try to access an authenticated page,
      // they will be redirected to the non-authenticated page
      if (to.matched.some(record => record.meta.requiresAuth)) {
        next({
          name: 'home'
        })
      // if non-authenticated user tries to access
      // an non-authenticated page,
      // they will be able to access it
      } else {
        next()
      }
    })
})

export default router
