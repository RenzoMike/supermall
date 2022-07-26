import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
