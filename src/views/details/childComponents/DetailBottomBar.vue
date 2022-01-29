<!-- DetailBottomBar -->
<template>
<div class='base'>
    <div class="left">
            <div>
                <img src="~assets/img/detail/shell.png" alt="">
                <div class="descri">客服</div>
            </div>
            <div>
                <img src="~assets/img/detail/want.png" alt="">
                <div class="descri">收藏</div>
            </div>
            <div>
                <img src="~assets/img/detail/shop.png" alt="">
                <div class="descri">店铺</div>
            </div>
    </div>
    <div class="right">
            <div class="cart" @click="addCart">
                <span>加入购物车</span>
            </div>
            <div class="buy">
                <span>立即购买</span>
            </div>
    </div>
</div>
</template>

<script>
export default {
name: 'DetailBottomBar',
data() {
return {

};
},
mounted() {

},
methods: {
    addCart() {
        this.$emit("addCart")
    }
},
}
</script>
<style scoped>
.base {
    height: 49px;
    background-color: #fff;
    position: fixed;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 100;
}
.right {
    display: flex;
    /* justify-content: space-around; */
    width: 40%;
    height: 49px;
    /* background-color: yellow; */
}
.left {
    display: flex;
    justify-content: space-around;
    width: 60%;
    height: 49px;
    background-color: #fff;
}
.left div {
    margin-top: 2px;
    margin-bottom: 2px;
    text-align: center;
}
.left img {
    width: 24px;
    text-align: center;
    /* vertical-align: middle; */
}
.right div {
    height: 49px;
    line-height: 49px;
}
.cart {
    width: 55%;
    text-align: center;
    background-color: yellow;
}
.buy {
    width: 45%;
    text-align: center;
    background-color: pink;
}
</style>