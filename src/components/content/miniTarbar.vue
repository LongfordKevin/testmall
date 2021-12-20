<!-- miniTarbar -->
<template>
<div class='page'>
  <tar-bar>
      <tar-bar-item path="/home">
        <img slot="img" src="~assets/img/tabbar/home.svg" alt="首页">
        <img slot="img_active" src="~assets/img/tabbar/home_active.svg" alt="首页">
        <div slot="descri">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/category">
        <img slot="img" src="~assets/img/tabbar/category.svg" alt="分类">
        <img slot="img_active" src="~assets/img/tabbar/category_active.svg" alt="分类">
        <div slot="descri">分类</div>
      </tar-bar-item>
      <tar-bar-item path="/shopcart">
        <img slot="img" src="~assets/img/tabbar/shopcart.svg" alt="购物车">
        <img slot="img_active" src="~assets/img/tabbar/shopcart_active.svg" alt="购物车">
        <div slot="descri">购物车</div>
      </tar-bar-item>
      <tar-bar-item path="/profile">
        <img slot="img" src="~assets/img/tabbar/profile.svg" alt="我的">
        <img slot="img_active" src="~assets/img/tabbar/profile_active.svg" alt="我的">
        <div slot="descri">我的</div>
      </tar-bar-item>
    </tar-bar>
</div>
</template>

<script>
import TarBar from '@/components/common/tarbar/Tarbar.vue'
import TarBarItem from '@/components/common/tarbar/TarbarItem.vue'
export default {
  name: 'MiniTarBar',
  components: {
    TarBar,
    TarBarItem
  }
}
</script>
<style scoped>

</style>