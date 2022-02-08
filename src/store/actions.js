export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let item = context.state.product.find(item => item.iid == payload.iid)
            console.log(item)
            let oldProduct = item
            if (oldProduct) {
                context.commit('addCounter', oldProduct)
                resolve('商品数量+1')
            } else {
                payload.count = 1
                context.commit('addToCart', payload)
                resolve('商品添加成功')
            }
        })
    },
    addCheckedAllOrder(context, payload) {
        let item = context.state.checkedOrder.find(item => item.iid == payload.iid)
        console.log(item)
        if (!item) {
            context.commit("addCheckedOrder", payload)
        }
    }
}