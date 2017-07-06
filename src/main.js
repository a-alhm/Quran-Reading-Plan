/* Vue */
import Vue from 'vue'
import router from './vue-router'
/* components */
import App from './components/App.vue'
import checkboxes from './components/checkboxes.vue'
import dayPlane from './components/dayPlane.vue'
import progressBar from './components/progressBar.vue'

Vue.component('dayPlane', dayPlane)
Vue.component('checkboxes', checkboxes)
Vue.component('progressBar', progressBar)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
