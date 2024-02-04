import Vue from 'vue'
import VueRouter from 'vue-router'
import PageView from '@/views/PageView.vue'
import AboutView from '@/views/AboutView.vue'
import InquiryView from '@/views/InquiryView.vue'
import Destination from '@/views/Destinations.vue'
import PlanView from '@/views/PlanView.vue'
import CreateUser from '@/views/CreateUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'page',
    component: PageView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path : '/inqury',
    name: 'inqury',
    component: InquiryView
  },
  {
    path : '/destinations',
    name: 'destinations',
    component: Destination
  },
  {
    path : '/plans',
    name: 'plans',
    component: PlanView
  },
  {
    path : '/users',
    name: 'users',
    component: CreateUser
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
