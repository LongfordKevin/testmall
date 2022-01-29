<!-- CartListItem -->
<template>
<div class='list-item'>
    <div class="check-box" @click="boxClick" >
        <div class="box" :class="{active: isChecked}"></div>
    </div>
    <div class="image">
        <img :src="goods.img" alt="">
    </div>
    <div class="info">
        <div class="title">{{goods.title}}</div>
        <div class="desc">{{goods.desc}}</div>
        <div class="info-d">
            <span class="price">{{"￥"+goods.price}}</span>
            <span class="count">{{"*"+goods.count}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
name: 'CartListItem',
props: {
    goods: {
        type: Object,
        default() {
        return {}
        }
    },
},
data() {
return {
    isChecked: false,
};
},
mounted() {
    this.$bus.$on("checkedAll", (res) => {
        console.log(res)
        this.isChecked = res
        if(this.isChecked) {
            this.$store.dispatch("addCheckedAllOrder", this.goods)
        }else {
            this.$store.commit("removeAll")
        }
        this.$emit("priceChange")
    })
},
methods: {
    boxClick() {
        this.isChecked = !this.isChecked
        console.log(this.isChecked)
        if(this.isChecked) {
            this.$store.commit("addCheckedOrder", this.goods)
        }else {
            this.$store.commit("removeCheckedOrder", this.goods)
        }
        this.$emit("priceChange")
    }
},
}
</script>
<style scoped>
    .list-item {
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #f5f2f8;
        padding: 3px 2px;
        display: flex;
        text-align: center;
    }
    .check-box {
        margin: 25px 0px 25px 10px;
    }
    .box {
        text-align: center;
        line-height: 80px;
        width: 25px;
        height: 25px;
        border: 1px solid #999;
        border-radius: 100%;
    }
    .title {
        color: black;
    }
    .active {
        background-color: var(--color-high-text);
        border: 1px solid #fff;
        border-radius: 100%;
    }
    img {
        margin: 2px 10px;
        line-height: 80px;
        width: 60px;
        height: 70px;
    }
    .info {
        overflow: hidden;
        margin-top: 2px;
    }
    .title {
        margin-right: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .desc {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
    }
    .info-d {
        margin-top: 10px;
    }
    .price {
        float:left;
        color: var(--color-high-text)
    }
    .count{
        float: right;
    }

</style>