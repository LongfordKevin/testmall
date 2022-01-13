<template>
  <div id="app">
    <keep-alive exclude="Details">
      <router-view />
    </keep-alive>
    <mini-tar-bar class="tar-bar"></mini-tar-bar>
  </div>
</template>

<script>
import MiniTarBar from "components/content/miniTarbar.vue";

export default {
  name: "App",
  components: {
    MiniTarBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
