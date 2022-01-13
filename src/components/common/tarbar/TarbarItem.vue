<!-- tarbaritem -->
<template>
<div class='tarBarItem' @click="itemClick">
  <div v-if="!isActive"><slot name="img"></slot></div>
  <div v-else><slot name="img_active"></slot></div>
  <div :style="activeStyle"><slot name="descri"></slot></div>
</div>
</template>

<script>
export default {
name: 'TarBarItem',
props: {
  path: String,
  activeColor: {
      type: String,
      default: 'red'
  }
},
data() {
return {
  
};
},
mounted() {

},
computed: {
    isActive() {
      // 为true则目前是当前页
        return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
        return this.isActive? {color: this.activeColor} : {}
    }
},
methods: {
  itemClick() {
    console.log(this.path)
    this.$router.replace(this.path)
  }
},
}
</script>
<style scoped>
  .tarBarItem {
    text-align: center;
    height: 49px;
    flex: 1;
    font-size: 14px;
    
  }
  .tarBarItem img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-top: 2px;
      margin-bottom: 2px;
  }
</style>