import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Kanban from '../views/Kanban'
import store from '../store/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: Kanban
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: Kanban,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/isAuthenticated']){
        return next({
          name: 'login'
        })
      }
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_BASE_URL,
  routes
})

export default router