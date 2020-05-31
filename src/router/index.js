import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    // component: Home
    redirect: { name: 'ShopMobile' }
  },
  {
    path: '/pc/shop',
    name: 'ShopPc',
    meta: { type: 'pc', name: 'Shop' },
    component: () => import('../views/pc/shop.vue')
  },
  {
    path: '/mobile/shop',
    name: 'ShopMobile',
    meta: { type: 'mobile', name: 'Shop' },
    component: () => import('../views/mobile/shop.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
