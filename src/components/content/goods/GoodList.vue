<!-- goodlist -->
<template>
  <div class="goodlist">
    <good-list-item
      v-for="item in goods"
      :key="item.title"
      :goods-item="item"
      class="good-item"
    />
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem.vue";
export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodListItem,
  },
  data() {
    return {};
  },
  created() {
    console.log("goods-list");
    console.log(this.goods);
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.goodlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>