import Vue from 'vue'
import VueRouter from 'vue-router'
import PageView from '@/views/PageView.vue'
import AboutView from '@/views/AboutView.vue'
import InquiryView from '@/views/InquiryView.vue'

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
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
