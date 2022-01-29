<!-- Home -->
<template>
  <div id="home" class="wrapper">
    <!-- <h1>home</h1> -->
    <nav-bar class="homenav"><div slot="center">购物街</div></nav-bar>
    <tab-control
        :title="title"
        class="tab1"
        @tabClick="tabClick"
        ref="tabControl1"
        v-show="isFixed"
      ></tab-control>
    <b-scroll class="content" ref="scroll" @scroll="positionClick" @pullingUp="loadData" :probe-type="3" :pull-up-load="true">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-bar :recommend="recommend"></recommend-bar>
      <feature></feature>
      <tab-control
        :title="title"
        class="tab2"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <good-list :goods="showGoods" />
    </b-scroll>
    <!-- 组件绑定事件必须加native -->
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
import { imageLoadMixin } from 'common/mixin.js'
import { BackToMixin } from 'common/mixin.js'
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
    // BackTo,
    // BackTo
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
      // isShowType: false,
      offsetTop: 0,
      isFixed: false,
      last_position: 0,
      imageFlag: null
    };
  },
  //混入
  mixins: [imageLoadMixin, BackToMixin],
  destroyed() {
    console.log("destroyed")
  },
  // 写了keep-alive后离开页面不会销毁，会执行deactivated函数，重回页面后执行activated
  activated() {
    console.log("activated")
    console.log(this.last_position)
    this.$refs.scroll.scrollTo(0, this.last_position, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    console.log("deactivated")
    this.last_position = this.$refs.scroll.getY()
    console.log(this.last_position)
    this.$bus.$off('loadImgFlag', this.imageFlag)
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
   
    // this.$bus.$on('loadImgFlag', this.imageFlag)
    this.$bus.$on('imgLoad', () => {
      console.log('---------')
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop
      console.log("this is offsetTop")
      console.log(this.offsetTop)
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
        // console.log("goods");
        // console.log(res)
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.data.list);
        // console.log(this.$refs.scroll)
        this.$refs.scroll.finishPullUp()
        // console.log(this.goods['pop'].list)
      });
    },
    tabClick(index) {
      // console.log(index);
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
      this.$refs.tabControl1.currenIndex = index
      this.$refs.tabControl2.currenIndex = index
    },
    // backClick() {
    //   // console.log("clicking")
    //   // console.log(this.$refs.backTo.scroll.scrollTo)
    //   this.$refs.scroll.scrollTo(0,0,500)
    // },
    positionClick(position) {
      // console.log(position.y)
      // 1.判断backto是否展示
      this.isShowType = position.y*(-1) > this.offsetTop
      // 2.判断tabControl是否展示
      this.isFixed = position.y*(-1) > this.offsetTop
      // console.log(this.isShowType)
    },
    loadData() {
      // console.log("上拉加载更多")
      this.getGoodsdata(this.currentType)
      // console.log("加载完成")
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
.tab1 {
  /* position: fixed;
  top: 44px;
  right: 0px;
  left: 0;
  bottom: 0; */
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.homenav {
  background-color: var(--color-tint);
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
/* .home {
  padding-top: 44px;
} */
.tab2 {
  /* position: sticky; */
  /* top: 44px; */
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