import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Main from '../views/Main.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'roots',
    redirect: '/alpha-shop/form-address'
  },
  {
    path: '/alpha-shop',
    name: 'alpha-shop',
    component: Main,
    children: [
      {
        path: 'form-address',
        name: 'form-address',
        component: () => import('../components/FormAddress.vue')
      },
      {
        path: 'form-ship',
        name: 'form-ship',
        component: () => import('../components/FormShip.vue')
      },
      {
        path: 'form-pay',
        name: 'form-pay',
        component: () => import('../components/FormPay.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'Not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
