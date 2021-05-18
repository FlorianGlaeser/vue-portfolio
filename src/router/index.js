import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../views/Home.vue'

Vue.use(VueRouter);
Vue.use(VueMeta);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reference',
    name: 'Reference',
    component: () => import(/* webpackChunkName: "reference" */ '../views/Reference.vue')
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import(/* webpackChunkName: "impressum" */ '../views/Impressum.vue')
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: () => import(/* webpackChunkName: "datenschutz" */ '../views/Datenschutz.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
