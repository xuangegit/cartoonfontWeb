import Vue from 'vue'
import App from './App.vue'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import './assets/style/reset.css'
import './assets/font/iconfont.css'
import store from './store'


Vue.use(elementUi)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
console.log('process', process.env)
