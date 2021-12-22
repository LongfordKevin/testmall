<!-- goodlist -->
<template>
<div class='goodlist'>
    <good-list-item v-for="(item,index) in goods" :key="index" :goodd-item="item" />
</div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'
export default {
name: 'GoodList',
props: {
    goods: {
        type: Array,
        default() {
            return []
        }
    }
},
components: {
    GoodListItem
},
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

</style>