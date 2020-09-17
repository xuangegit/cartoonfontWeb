import Vue from 'vue'
import App from './App.vue'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import './assets/style/reset.css'
import './assets/font/iconfont.css'
import store from './store'
import http from './utils/http'
import JsonExcel from 'vue-json-excel'
// import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(elementUi)
Vue.component('downloadExcel', JsonExcel)
Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
console.log('process', process.env)
