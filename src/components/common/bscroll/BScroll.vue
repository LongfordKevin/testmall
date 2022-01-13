<!-- BScroll -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BScroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
        type: Boolean,
        default() {
            return false
        }
    }
  },
  data() {
    return {
      scroll: null,
      // wrapper: this.$refs.aaa
    };
  },
  mounted() {
    // console.log(this.wrapper)
    // 1.创建bs对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
      // pullUpLoad: true
    });
    // 2.监听滚动事件
    this.scroll.on("scroll", (position) => {
      // console.log(position)
      this.$emit("scroll", position);
    });
    console.log(this.scroll)
    // 3.监听上拉事件
    this.scroll.on("pullingUp", () => {
        console.log("上拉加载")
        this.$emit('pullingUp')
    })
    // this.scroll.scrollTo(0,0)
  },
  methods: {
    scrollTo(x, y, time) {
    //   console.log("scrolling");
    //   console.log(x, y, time);
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
        this.scroll && this.scroll.refresh()
    },
    finishPullUp() {
        this.scroll.finishPullUp()
    },
    getY() {
        return this.scroll ? this.scroll.y : 0
    }
  },
};
</script>
<style scoped>
</style>