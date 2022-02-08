import Toast from './Toast.vue'
const obj = {}
obj.install = function(Vue) {
    console.log("执行了toast插件的install函数")
    // 1.创建组件构造器
    const toastConstrustor = Vue.extend(Toast)
    // 2.new的方式创建组件对象
    const toast = new toastConstrustor()
    // 3.手动挂载
    toast.$mount(document.createElement("div"))
    // 4.toast.$el对应的就是div
    document.body.appendChild(toast.$el)
    // 5.配置原型
    Vue.prototype.$toast = toast
}
export default obj