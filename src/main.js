import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../static/css/sitehome.css'
import '../static/css/list.css'
import '../static/css/detail.css'
import '../static/css/m.css'

Vue.config.productionTip = false
Vue.use(iView)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
