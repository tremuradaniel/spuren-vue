import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'
import Register from '../views/Register'
import Kanban from '../views/Kanban'
import store from '../store/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['login', 'register']
  if (!(publicPages.includes(to.name)) && !store.getters['auth/isAuthenticated']) next({ name: 'login' })
  else next()
})

export default router