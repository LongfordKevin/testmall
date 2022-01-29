export default {
    addCart(context, payload) {
        let item = context.state.product.find(item => item.iid == payload.iid)
        console.log(item)
        let oldProduct = item
        if (oldProduct) {
            context.commit('addCounter', oldProduct)
        } else {
            payload.count = 1
            context.commit('addToCart', payload)
        }
    },
    addCheckedAllOrder(context, payload) {
        let item = context.state.checkedOrder.find(item => item.iid == payload.iid)
        console.log(item)
        if(!item) {
            context.commit("addCheckedOrder", payload)
        }
    }
}