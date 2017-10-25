import Vue from 'vue'
import App from './App'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

Vue.use(VueAnalytics, {
  id: 'UA-96940785-3'
})
