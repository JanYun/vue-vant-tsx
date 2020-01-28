import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/http'
import '@/plugins/mock'
import '@/plugins/vant'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
