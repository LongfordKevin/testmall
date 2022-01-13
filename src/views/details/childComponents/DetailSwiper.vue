<!-- DetailSwiper -->
<template>
    <swiper class="datailSwiper">
        <swiper-item v-for="item in topImg" :key="item">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
name: 'DetailSwiper',
props: {
    topImg: {
        type: Array,
        default() {
            return []
        }
    }
},
components: {
    Swiper,
    SwiperItem
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
    .datailSwiper {
        height: 300px;
        overflow: hidden;
    }
</style>