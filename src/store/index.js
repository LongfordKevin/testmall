import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// 1.安装
Vue.use(Vuex)
// 2.创建
const store = new Vuex.Store({
    state: {
        product: [],
        checkedOrder: [],
    },
    mutations,
    actions,
    getters,
})
// 3.挂载
export default store