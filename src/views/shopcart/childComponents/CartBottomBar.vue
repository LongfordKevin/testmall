<!-- CartBottomBar -->
<template>
<div class='cart-bottom-bar'>
    <div class="all-check">
        <div class="check-box" @click="checkedAll" :class="{active : isCheckedAll}"></div>
        <p>全选</p>
    </div>
    <div class="price">{{"合计： "+price+" 元"}}</div>
    <div class="order-submit">提交订单</div>
</div>
</template>

<script>
export default {
name: 'CartBottomBar',
props: {
    orderItems: {
        type: Array,
        default() {
            return {}
        }
    },
    price: {
        type: Number,
        default() {
            return 0
        }
    }
},
data() {
return {
    isCheckedAll: false,
};
},
mounted() {

},
methods: {
    checkedAll() {
        this.isCheckedAll = !this.isCheckedAll
        this.$bus.$emit("checkedAll", this.isCheckedAll)
    }
},
}
</script>
<style scoped>
    .cart-bottom-bar {
        width: 100%;
        height: 34px;
        background-color: #f5f2f8;
        position: fixed;
        bottom: 50px;
        display: flex;
    }
    .all-check {
        width: 20%;
        display: flex;
    }
    .check-box {
        margin: 6px auto;
        line-height: 34px;
        width: 20px;
        height: 20px;
        border: 1px solid #999;
        border-radius: 100%;
    }
    .all-check p {
        margin-top: 8px;
        font-size: 16px;
    }
    .active {
        background-color: var(--color-high-text);
        border: 1px solid #fff;
        border-radius: 100%;
    }
    .price {
        margin-left: 20px;
        width: 50%;
        line-height: 34px;
    }
    .order-submit {
        width: 30%;
        background-color: var(--color-high-text);
        color: #fff;
        font-weight: 700;
        text-align: center;
        line-height: 34px;
    }
</style>