import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'
import store from '@/store'

/* // to handle errors when trying to push same path (if path is the same for Home and Welcome views)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
} */

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
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
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.logged) {
      next({
        name: 'home'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.state.logged) {
      next({
        name: 'welcome'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
