import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import {BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'


Vue.use(BootstrapVueIcons)
Vue.use(VueResource)

Vue.filter('money', value =>{
  return 'R$' + String(value).replace('.',',')
})

Vue.http.options.root = 'http://api.gunshop/api/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
