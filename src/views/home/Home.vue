<!-- Home -->
<template>
<div class='home'>
  <!-- <h1>home</h1> -->
  <div class="homenav"><nav-bar><div slot="center">购物街</div></nav-bar></div>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-bar :recommend="recommend"></recommend-bar>
  <feature></feature>
  <tab-control :title="title" class="tab" @tabClick="tabClick"></tab-control>
  <good-list :goods="showCurrentype" />
</div>
</template>

<script>
import NavBar from 'components/common/navbar/Navbar.vue'
import HomeSwiper from './childComponents/HomeSwiper.vue'
import RecommendBar from './childComponents/RecommendBar.vue'
import Feature from './childComponents/Feature.vue'
import TabControl from 'components/content/TabControl.vue'
import GoodList from 'components/content/goods/GoodList.vue'

import {getHomedata} from 'network/home.js'
import {getGoodsdata} from 'network/home.js'
export default {
name: 'Home',
components: {
  NavBar,
  HomeSwiper,
  RecommendBar,
  Feature,
  TabControl,
  GoodList
},
data() {
return {
  banners: [],
  recommend: [],
  title: ["流行", "新款", "精选"],
  goods: {
    'pop': {page: 0, list: []},
    'new': {page: 0, list: []},
    'sell': {page: 0, list: []}
  },
  currentType: 'pop'
};
},
created() {
  this.getHomedata(),
  this.getGoodsdata('pop')
},
mounted() {

},
methods: {
  getHomedata() {
    getHomedata().then(res => {
      // console.log(res)
      this.banners = res.data.data.banner.list
      this.recommend = res.data.data.recommend.list
      // console.log(this.banners)
  })
  },
  getGoodsdata(type) {
    const page = this.goods[type].page + 1
    getGoodsdata(type, page).then(res => {
      console.log("goods")
      console.log(res)
      this.goods[type].page += 1
      this.goods[type].list.push(...res.data.list)
    })
  },
  tabClick(index) {
    console.log(index)
    switch (index) {
      case 1:
        this.currentType = 'pop'
        break;
      case 2:
        this.currentType = 'new'
        break;
      case 3:
        this.currentType = 'sell'
        break;
    }
  }
},
computed: {
  showCurrentype() {
    return this.goods[this.currentType].list
  }
}
}
</script>
<style scoped>
  .homenav {
    background-color: var(--color-tint);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .home {
    padding-top: 44px;
  }
  .tab {
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
</style>