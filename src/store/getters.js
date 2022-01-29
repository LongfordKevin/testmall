export default {
    productGetter(state) {
        return state.product
    },
    productLengthGetter(state) {
        return state.product.length
    },
    checkOrderGetter(state) {
        return state.checkedOrder
    },
    checkOrderPriceGetter(state) {
        const len = state.checkedOrder.length
        let sum = 0
        for(let i = 0; i < len; i++) {
            sum = sum + (state.checkedOrder[i].price * state.checkedOrder[i].count)
        }
        console.log(sum)
        return sum
    }
}