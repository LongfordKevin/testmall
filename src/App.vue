<template>
  <div id="app">
    <router-view/>
    <mini-tar-bar></mini-tar-bar>
  </div>
</template>

<script>
import MiniTarBar from 'components/content/miniTarbar.vue'

export default {
  name: 'App',
  components: {
    MiniTarBar
  }
}
</script>

<style>
  @import 'assets/css/base.css'
</style>
