import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListaConta from '../views/ListaConta.vue'
import ListaAjuda from '../views/ListaAjuda.vue'
import PagarConta from '../views/PagarConta.vue'
import AdiconarConta from '../views/AdiconarConta.vue'
import AdiconarAjuda from '../views/AdiconarAjuda.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lista_conta',
    name: 'ListaConta',
    component: ListaConta
  },
  {
    path: '/lista_ajuda',
    name: 'ListaAjuda',
    component: ListaAjuda
  },
  {
    path: '/pagar_conta/:id',
    name: 'PagarConta',
    component: PagarConta
  },
  {
    path: '/adicionar_conta',
    name: 'AdiconarConta',
    component: AdiconarConta
  },
  {
    path: '/adicionar_ajuda',
    name: 'AdiconarAjuda',
    component: AdiconarAjuda
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
