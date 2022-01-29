<!-- details -->
<template>
  <div class="datails">
    <detail-nav class="detail-bar" @titleClick="titleChange" ref="nav"></detail-nav>
    <b-scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
        <!-- <ul>
        <li v-for="(item, index) in $store.state.product" :key="index">{{item}}</li>
    </ul> -->
      <detail-swiper :topImg="topImg"></detail-swiper>
      <detail-baseInfo :goods="goods"></detail-baseInfo>
      <detail-shop :shopInfo="shopInfo"></detail-shop>
      <detail-info :detailInfo="detailInfo"></detail-info>
      <detail-params :params="params" ref="params"></detail-params>
      <detail-rate :rate="rate" ref="rate"></detail-rate>
      <good-list :goods="recommends" ref="recommends" />
    </b-scroll>
    <detail-bottom-bar @addCart="addCart" ></detail-bottom-bar>
    <back-to class="back-to" @click.native="backClick" v-show="isShowType"></back-to>
  </div>
</template>

<script>
import DetailNav from "./childComponents/DetailNav.vue";
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import DetailShop from "./childComponents/DetailShop.vue";
import DetailInfo from "./childComponents/DetailInfo.vue";
import BScroll from "components/common/bscroll/BScroll.vue";
import DetailParams from "./childComponents/DetailParams.vue";
import DetailRate from "./childComponents/DetailRate.vue";
import GoodList from "components/content/goods/GoodList.vue";
import DetailBottomBar from "./childComponents/DetailBottomBar.vue"
import {
  Shops,
  Goods,
  getDetails,
  DetailMessage,
  Params,
  Rate,
  getRecommend,
} from "network/detail.js";
import { debounce } from "common/utils.js";
import { imageLoadMixin } from "common/mixin.js"
import { BackToMixin } from 'common/mixin.js'
export default {
  name: "Details",
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    BScroll,
    DetailInfo,
    DetailParams,
    DetailRate,
    GoodList,
    DetailBottomBar,
  },
  mixins: [imageLoadMixin, BackToMixin],
  data() {
    return {
      iid: 0,
      topImg: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      params: {},
      rate: {},
      recommends: [],
      title_position: [],
      currentIndex: 0,
    };
  },
  created() {
    console.log("details created");
    this.iid = this.$route.params.iid;
    console.log(this.iid);
    this.getDetails(this.iid);
    getRecommend().then((res) => {
      // console.log(res)
      this.recommends = res.data.data.list;
    });
  },
  destroyed() {
    console.log("destroyed");
    this.$bus.$off("loadImgFlag", this.imageFlag);
  },
  mounted() {
    // console.log(this.$refs.scroll)
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    const get_offset = debounce(() => {
        this.title_position = []
        this.title_position.push(0)
        this.title_position.push(this.$refs.params.$el.offsetTop)
        this.title_position.push(this.$refs.rate.$el.offsetTop)
        this.title_position.push(this.$refs.recommends.$el.offsetTop)
    }, 50)
    this.$bus.$on("loadImg", () => {
      refresh();
      get_offset();
      console.log(this.title_position)
    });
  },
  methods: {
    getDetails(iid) {
      getDetails(iid).then((res) => {
        console.log(res);
        this.topImg = res.data.result.itemInfo.topImages;
        this.goods = new Goods(
          res.data.result.columns,
          res.data.result.itemInfo,
          res.data.result.shopInfo
        );
        this.shopInfo = new Shops(res.data.result.shopInfo);
        this.detailInfo = new DetailMessage(res.data.result.detailInfo);
        this.params = new Params(res.data.result.itemParams);
        this.rate = new Rate(res.data.result.rate);
      });
    },
    titleChange(index) {
        this.$refs.scroll.scrollTo(0, -this.title_position[index], 500)
    },
    contentScroll(position) {
        this.isShowType = position.y*(-1) > 1000
        const position_page = -position.y 
        // console.log(position_page)
        for(let i in this.title_position) {
            i = parseInt(i)
            // console.log(i)
            // hack做法：在this.title_position中最后插入一个Number.MAX_VALUE然后在遍历时长度为length-1。
            if (this.currentIndex !== i && ((i < this.title_position.length - 1 && position_page >= this.title_position[i] && position_page < this.title_position[i+1]) || (i === this.title_position.length - 1 && position_page > this.title_position[i]))) {
                console.log("11111112222222")
                this.currentIndex = i
                console.log(i)
                this.$refs.nav.currentIndex = this.currentIndex
        }
        }
    },
    addCart() {
        const product={}
        product.iid = this.iid
        product.img = this.topImg[1]
        product.desc = this.goods.desc
        product.title = this.goods.title
        product.price = this.goods.lowNowPrice
        this.$store.dispatch("addCart", product)
        console.log("commit done")
    }
  },
};
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