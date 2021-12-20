import Vue from 'vue'
// import { resolve } from '../../../../04webpack/04webpack配置vue/build/base.config'
import App from '@/App'
import router from '@/router/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})