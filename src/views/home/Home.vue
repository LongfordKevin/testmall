<!-- Home -->
<template>
  <div id="home" class="wrapper">
    <!-- <h1>home</h1> -->
    <nav-bar class="homenav"><div slot="center">购物街</div></nav-bar>
    <b-scroll class="content" ref="scroll" @scroll="positionClick" @pullingUp="loadData" :probe-type="3" :pull-up-load="true">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-bar :recommend="recommend"></recommend-bar>
      <feature></feature>
      <tab-control
        :title="title"
        class="tab"
        @tabClick="tabClick"
      ></tab-control>
      <good-list :goods="showGoods" />
    </b-scroll>
    <back-to class="back-to" @click.native="backClick" v-show="isShowType"></back-to>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar.vue";
import HomeSwiper from "./childComponents/HomeSwiper.vue";
import RecommendBar from "./childComponents/RecommendBar.vue";
import Feature from "./childComponents/Feature.vue";
import TabControl from "components/content/TabControl.vue";
import GoodList from "components/content/goods/GoodList.vue";
import BScroll from "components/common/bscroll/BScroll.vue";
import BackTo from 'components/content/backTo/BackTo.vue'

import { getHomedata } from "network/home.js";
import { getGoodsdata } from "network/home.js";
import { debounce } from 'common/utils.js'
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendBar,
    Feature,
    TabControl,
    GoodList,
    BScroll,
    BackTo,
    BackTo
  },
  data() {
    return {
      banners: [],
      recommend: [],
      title: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowType: false
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomedata();
    // 2.请求商品数据
    this.getGoodsdata("pop");
    this.getGoodsdata("new");
    this.getGoodsdata("sell");

   
  },
  mounted() {
     // 3.监听图片是否加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('loadImgFlag', () => {
      console.log('-----')
      refresh()
      // this.$refs.scroll.refresh()
    })
  },
  methods: {
    getHomedata() {
      getHomedata().then((res) => {
        // console.log(res)
        this.banners = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
        // console.log(this.banners)
      });
    },
    getGoodsdata(type) {
      const page = this.goods[type].page + 1;
      getGoodsdata(type, page).then((res) => {
        console.log("goods");
        // console.log(res)
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.data.list);
        this.$refs.scroll.finishPullUp()
        // console.log(this.goods['pop'].list)
      });
    },
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      console.log("clicking")
      // console.log(this.$refs.backTo.scroll.scrollTo)
      this.$refs.scroll.scrollTo(0,0,500)
    },
    positionClick(position) {
      console.log(position.y)
      this.isShowType = position.y*(-1) > 1000
      console.log(this.isShowType)
    },
    loadData() {
      console.log("上拉加载更多")
      this.getGoodsdata(this.currentType)
      console.log("加载完成")
      // this.scroll.scroll.refresh()
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>
<style scoped>
.wrapper {
  height: 100vh;
  position: relative;
}
.homenav {
  background-color: var(--color-tint);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
/* .home {
  padding-top: 44px;
} */
.tab {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* overflow: hidden; */
  /* height: 300px; */
}
</style>