import Vue from 'vue'
import router from './vue-router'
import App from './App.vue'
import checkboxes from './components/checkboxes.vue'

Vue.component('checkboxes', checkboxes)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
