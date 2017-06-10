import Vue from 'vue'
import router from './vue-router'
import App from './App.vue'
import checkboxes from './components/checkboxes.vue'
import schedule from './components/schedule.vue'

Vue.component('checkboxes', checkboxes)
Vue.component('schedule', schedule)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
