<!-- DetailBaseInfo -->
<template>
  <div class="info-base" v-if="Object.keys(goods).length != 0">
    <div class="info-goods">
      <div class="info-title">
        {{ goods.title }}
      </div>
      <div class="info-price">
        <span class="n-price">{{ "￥" + goods.lowNowPrice }}</span>
        <span class="o-price">{{ "￥" + goods.highPrice }}</span>
        <span class="discount">{{ goods.discount }}</span>
      </div>
      <div class="info-columns">
        <span>{{ goods.columnsNum }}</span>
        <span>{{ goods.columnsLike }}</span>
        <span>{{ goods.columnsDelivery + "小时发货" }}</span>
      </div>
    </div>
    <div class="base-service">
      <div class="info-service" v-for="item in goods.service" :key="item.name">
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
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
};
</script>
<style scoped>
.info-base {
  border-bottom: 5px solid #f5f2f8;
}
.info-goods {
  margin: 10px;
  padding: 0px 4px;
  color: #999;
  border-bottom: 2px solid #f5f2f8;
}
.info-title {
  color: #222;
  line-height: 25px;
}
.info-price {
  margin-top: 10px;
}
.info-price .n-price {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-high-text);
}
.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discount {
  margin-left: 5px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
}
.info-columns {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  /* border-bottom: 2px solid #f5f2f8; */
}
.base-service {
  margin: 15px 1px;
  display: flex;
  justify-content: space-between;
  padding: 5px 2px;
}
.info-service img {
  width: 15px;
  vertical-align: center;
}
.info-service span {
  margin-left: 1px;
  font-size: 13px;
}
</style>