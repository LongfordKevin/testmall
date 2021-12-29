<!-- Tarbar -->
<template>
<div class='TarBar'>
  <slot></slot>
</div>
</template>

<script>
export default {
name: 'TarBar',
data() {
return {

};
},
mounted() {

},
methods: {

},
}
</script>
<style scoped>
  .TarBar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0px -2px 1px rgba(100,100,100,0.1);
    z-index: 5;
  }
</style>