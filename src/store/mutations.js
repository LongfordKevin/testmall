export default {
    addToCart(state, payload) {
        state.product.push(payload)
    },
    addCounter(state, payload) {
        payload.count += 1
    },
    addCheckedOrder(state, payload) {
        state.checkedOrder.push(payload)
    },
    removeCheckedOrder(state, payload) {
        let index = state.checkedOrder.findIndex(item => item.iid == payload.iid)
        console.log(index)
        console.log(state.checkedOrder.length)
        state.checkedOrder.splice(index, 1)
        console.log(state.checkedOrder.length)
        console.log(state.checkedOrder)
    },
    removeAll(state) {
        state.checkedOrder=[]
    }
}