<template>
  <div class="toast" v-show="show">{{ message }}</div>
</template>

<script>
export default {
  name: "Toast",
  components: {},
  data() {
    return {
      message: "",
      show: false,
    };
  },
  // props: {
  //     isShow: {
  //         type: Boolean,
  //         default() {
  //             return false
  //         }
  //     },
  //     message: {
  //         type: String,
  //         default() {
  //             return ''
  //         }
  //     }
  // },
  methods: {
    toastShow(content, time) {
      this.message = content;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, time);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 15%;
  color: #fff;
  z-index: 999;
}
</style>