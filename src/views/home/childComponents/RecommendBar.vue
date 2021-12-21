<!-- recommend -->
<template>
<div class='recommend'>
    <div class="recommendItem" v-for="(item,index) in recommend" :key="index">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
</div>
</template>

<script>
export default {
name: 'RecommendBar',
props: {
    recommend: {
        type: Array,
        default() {
            return []
        }
    }
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
    .recommend {
        display: flex;
        text-align: center;
        font-size: 14px;
        padding: 12px 0px;
        border-bottom: 6px solid #eee;
    }
    .recommendItem {
        flex: 1;
    }
    .recommendItem img {
        width: 65px;
        height: 65px;
        margin-bottom: 5px;
    }
</style>