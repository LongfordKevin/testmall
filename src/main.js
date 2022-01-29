import Vue from 'vue'
// import { resolve } from '../../../../04webpack/04webpack配置vue/build/base.config'
import App from '@/App'
import router from '@/router/index.js'
import store from "store/index.js"

Vue.config.productionTip = false
// 注册事件总线
Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})