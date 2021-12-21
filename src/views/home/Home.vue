<!-- Home -->
<template>
<div class='home'>
  <!-- <h1>home</h1> -->
  <div class="homenav"><nav-bar><div slot="center">购物街</div></nav-bar></div>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-bar :recommend="recommend"></recommend-bar>
  <feature></feature>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
  </ul>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/Navbar.vue'
import HomeSwiper from './childComponents/HomeSwiper.vue'
import RecommendBar from './childComponents/RecommendBar.vue'
import Feature from './childComponents/Feature.vue'

import {getHomedata} from 'network/home.js'
export default {
name: 'Home',
components: {
  NavBar,
  HomeSwiper,
  RecommendBar,
  Feature
},
data() {
return {
  banners: [],
  recommend: [],
};
},
created() {
  getHomedata().then(res => {
    console.log(res)
    this.banners = res.data.data.banner.list
    this.recommend = res.data.data.recommend.list
    console.log(this.banners)
  })
},
mounted() {

},
methods: {

},
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
</style>