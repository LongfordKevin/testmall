<!-- Shopcart -->
<template>
  <div class="base">
    <nav-bar class="nav-bar">
      <div slot="center">
        <div>
          <span>{{
            "购物车(" + $store.getters.productLengthGetter + ")"
          }}</span>
        </div>
      </div>
    </nav-bar>
    <b-scroll class="content" ref="scroll" :probe-type="3">
      <cart-list-item
        v-for="(item, index) in this.$store.state.product"
        :key="index"
        :goods="item"
        @priceChange="priceChange"
      ></cart-list-item>
    </b-scroll>
    <cart-bottom-bar :orderItems="this.$store.state.checkedOrder" :price="getPrice"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar.vue";
import CartListItem from "./childComponents/CartListItem.vue";
import BScroll from "components/common/bscroll/BScroll.vue";
import CartBottomBar from './childComponents/CartBottomBar.vue'
export default {
  name: "Shopcart",
  components: {
    NavBar,
    CartListItem,
    BScroll,
    CartBottomBar,
  },
  data() {
    return {
      getPrice: 0,
    };
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  mounted() {},
  methods: {
    priceChange() {
      this.getPrice = this.$store.getters.checkOrderPriceGetter
    }
  },
};
</script>
<style scoped>
.base {
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: var(--color-high-text);
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>