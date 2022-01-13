<!-- DetailNav -->
<template>
<div class='page'>
    <nav-bar>
        <div slot="left" class="left" @click="backClick">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="center">
            <div 
            class='center-item' 
            v-for="(item, index) in titles" 
            :key="index" 
            :class="{active: index === currentIndex}"
            @click="titleClick(index)">{{item}}</div>
        </div>
    </nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/Navbar.vue'
export default {
name: 'DetailNav',
components: {
    NavBar
},
data() {
return {
    titles: ['商品', '参数', '评论', '推荐'],
    currentIndex: 0
};
},
mounted() {

},
methods: {
    titleClick(index) {
        this.currentIndex = index
    },
    backClick() {
        this.$router.back()
    }
},
}
</script>
<style scoped>
    .center {
        display: flex;
        font-size: 14px;
        color: black;
    }
    .center-item {
        flex: 1;
    }
    .active {
        color: var(--color-high-text)
    }
    .left {
        margin-top: 7px;
    }

</style>