<!-- details -->
<template>
<div class='datails'>
    <detail-nav class="detail-bar"></detail-nav>
    <b-scroll class="content" ref="scroll">
    <detail-swiper :topImg='topImg'></detail-swiper>
    <detail-baseInfo :goods="goods"></detail-baseInfo>
    <detail-shop :shopInfo="shopInfo"></detail-shop>
    <detail-info :detailInfo="detailInfo"></detail-info>
    <detail-params :params="params"></detail-params>
    </b-scroll>
</div>
</template>

<script>
import DetailNav from './childComponents/DetailNav.vue'
import DetailSwiper from './childComponents/DetailSwiper.vue'
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
import DetailShop from './childComponents/DetailShop.vue'
import DetailInfo from './childComponents/DetailInfo.vue'
import BScroll from "components/common/bscroll/BScroll.vue"
import DetailParams from './childComponents/DetailParams.vue'
import { Shops, Goods, getDetails, DetailMessage, Params } from 'network/detail.js'
import { debounce } from 'common/utils.js'
export default {
name: 'Details',
components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    BScroll,
    DetailInfo,
    DetailParams
},
data() {
return {
    iid: 0,
    topImg: [],
    goods: {},
    shopInfo: {},
    detailInfo: {},
    params: {},
};
},
created() {
    console.log("details created")
    this.iid = this.$route.params.iid
    console.log(this.iid)
    this.getDetails(this.iid)
},
destroyed() {
    console.log("destroyed")
},
mounted() {
    // console.log(this.$refs.scroll)
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on("imgLoding", () => {
        refresh()
    })
},
methods: {
    getDetails(iid) {
        getDetails(iid).then(res => {
            console.log(res)
            this.topImg = res.data.result.itemInfo.topImages
            this.goods = new Goods(res.data.result.columns, res.data.result.itemInfo, res.data.result.shopInfo)
            this.shopInfo = new Shops(res.data.result.shopInfo)
            this.detailInfo = new DetailMessage(res.data.result.detailInfo)
            this.params = new Params(res.data.result.itemParams)
        })
    }
},
}
</script>
<style scoped>
    .datails {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }
    .detail-bar {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
    .content {
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>