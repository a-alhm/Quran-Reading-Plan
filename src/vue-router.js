import Vue from 'vue'
import Router from 'vue-router'
import start from './components/start.vue'
import form from './components/form.vue'

Vue.use(Router)

const routes = [
  {
    path: '*'
  },
  {
    path: '/dashboard'
  },
  {
    path: '/',
    component: start
  },
  {
    path: '/form',
    component: form
  }
]

export default new Router({
  routes
})
