<!-- DetailRate -->
<template>
  <div class="base" v-if="rate.cRate > 0">
    <div class="title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="user">
      <img :src="rate.avatar" alt="" />
      <span>{{ rate.name }}</span>
    </div>
    <div class="content">
      <span>{{ rate.content }}</span>
    </div>
    <div class="style">
      <span>{{ rate.time | showDate(rate.time) }}</span>
      <span>{{ rate.style }}</span>
    </div>
    <div class="images">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in rate.images"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";
export default {
  name: "DetailRate",
  props: {
    rate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  filters: {
      // 处理时间
    showDate(value) {
      const date = new Date(value * 1000);
    //   console.log(value)
      const str = formatDate(date, "yyyy-MM-dd hh:mm");
    //   console.log(str)
      return str;
      
    },
  },
};
</script>
<style scoped>
.base {
  border-bottom: var(--border-bottom);
}
.title span:last-child {
  float: right;
}
.title {
  margin: 1px 5px;
  height: 40px;
  line-height: 40px;
  border-bottom: 2px soild black;
}
.user {
  font-size: 16px;
  margin: 15px 5px;
}
.user img {
  width: 60px;
  border-radius: 100%;
  vertical-align: middle;
  margin-left: 10px;
}
.user span {
  margin-left: 10px;
}
.content {
  margin-left: 15px;
  font-size: 14px;
}
.style {
  margin: 10px 15px;
  font-size: 14px;
}
.style span:first-child {
    margin-right: 10px;
}
.images img {
  margin: 0px 15px;
  width: 100px;
  margin-bottom: 10px;
}
</style>