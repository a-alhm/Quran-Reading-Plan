import Vue from 'vue'
import Router from 'vue-router'
import start from './components/start.vue'
import form from './components/form.vue'

Vue.use(Router)

const routes =  [
    {
      path: '/',
      name: 'Start',
      component: start
    },
    {
        path:'/form',
        name: 'form',
        component: form
    }
  ]    

export default new Router({
  routes
})
