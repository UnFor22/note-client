import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const components = {
  index: () => import ('@/views/index.vue'),
  register: () => import ('@/views/register.vue'),
  writenote: () => import ('@/views/writenote.vue')
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: components.index
    },
    {
      path: '/register',
      name: 'register',
      component: components.register
    },
    {
      path: '/writenote',
      name: 'writenote',
      component: components.writenote
    },
  ]
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach((to, from) => {
  Nprogress.done()
})

export default router
