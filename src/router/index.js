import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'Login', component: () => import('@/pages/login.vue') },
    { path: '/index', name: 'Index', component: () => import('@/pages/index.vue'), children:[
      { path: '', redirect: 'content' },
      { path: 'productCenter', name: 'productCenter', component: () => import('@/pages/productCenter/index.vue') },
      { path: 'content', name: 'content', component: () => import('@/pages/homePage/index.vue') },
      { path: '*', name: '404', component: () => import('@/pages/404.vue') }
    ] }
  ]
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("userName")) {
      if (to.path !== '/login') {
          return next('/login')
      }
  }
  next()
})

export default router