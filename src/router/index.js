import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Sinner from '@/views/sinner'
import Test from '@/views/home'
import SignUp from '@/views/signUp'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/sinner',
    name: 'sinner',
    component: Sinner
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = new VueRouter({
  routes
})

export default router
