<!-- DetailParams -->
<template>
  <div class="base">
    <div class="rules">
      <div class="rules-title">
        <span>{{ params.rule_key }}</span>
      </div>
      <table>
        <tr>
          <td v-for="(item, index) in params.rule_tables" :key="index">
            {{ item }}
          </td>
        </tr>
      </table>
    </div>
    <div class="product-key">
        <div class="key-title">
            <span>{{ params.product_key }}</span>
        </div>
        <table>
            <tr v-for="(item, index) in params.product_info" :key="index">
                <td>{{ item.key }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    params: {
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
.rules {
  border-bottom: var(--border-bottom);
}
.rules-title .key-title {
  margin-top: 10px;
  font-weight: 700;
  margin-left: 2px;
}
table {
  margin-top: 15px;
  width: 100%;
  font-size: var(--font-size);
  padding-bottom: 15px;
  /* text-align: left; */
}
table tr {
  margin-top: 10px;
  text-align: left;
}
table td:first-child {
  color: var(--color-high-text);
}
</style>