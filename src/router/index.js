import Vue from 'vue'
import VueRouter from 'vue-router'
import Tarefas from '../views/TarefasView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tarefas-view',
    component: Tarefas
  },
  {
    path: '/sobre',
    name: 'SobreView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SobreView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
