import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
  },
  {
    path: '/career',
    name: 'career',
    component: () => import(/* webpackChunkName: "about" */ '../views/Career.vue')

  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/brands',
    name: 'brands',
    component: () => import(/* webpackChunkName: "about" */ '../views/Brands.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import(/* webpackChunkName: "about" */ '../views/Skills.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
