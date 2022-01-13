<!--  -->
<template>
  <div class="homeswiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      loadType: false,
    };
  },
  mounted() {},
  methods: {
    imgLoad() {
      if (!this.loadType) {
        console.log("---");
        this.$bus.$emit("imgLoad")
        this.loadType = true
      }
    },
  },
};
</script>
<style scoped>
</style>