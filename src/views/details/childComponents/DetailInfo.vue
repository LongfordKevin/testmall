<!-- DetailInfo.vue -->
<template>
<div class='base'>
    <div class="info-desc">
        <span>{{detailInfo.desc}}</span>
    </div>
    <div class="image-title">
        <span>{{detailInfo.key}}</span>
    </div>
    <div class="info-image">
        <img v-for="(item, index) in detailInfo.images" :key="index" :src="item" alt="" @load="imgLoad">
    </div>
</div>
</template>

<script>
export default {
name: 'DetailInfo',
data() {
return {
    counter: 0,
    imageLength: 0
};
},
props: {
    detailInfo: {
        type: Object,
        default() {
            return {}
        }
    }
},
created() {

},
mounted() {

},
methods: {
    imgLoad() {
        if(++this.counter === this.imageLength) {
            this.$bus.$emit("imgLoding")
        }
    }
},
watch: {
    detailInfo() {
        this.imageLength = this.detailInfo.images.length
        // console.log(this.imageLength)
    }
}
}
</script>
<style scoped>
.base {
    border-bottom: 5px solid #f5f2f8;
}
.info-desc {
    margin: 20px 2px 10px 2px;
    padding-bottom: 5px;
    border-bottom: 1px solid grey;
}
.image-title {
    font-weight: 700;
}
.info-image img {
    width: 100%;
}
</style>