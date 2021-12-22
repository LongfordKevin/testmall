<!-- TabControl -->
<template>
<div class='tab_control'>
    <div class="tab_item" 
        v-for="(item,index) in title" 
        :key="index" 
        :class="{active: currenIndex === index}"
        @click="btnClick(index)">
        <span>{{item}}</span>
    </div>
</div>
</template>

<script>
export default {
name: 'TabControl',
data() {
return {
    currenIndex: 0
};
},
props: {
    title: {
        type: Array,
        default() {
            return []
        }
    }
},
mounted() {

},
methods: {
    btnClick(index) {
        this.currenIndex = index;
        this.$emit('tabClick', index)
    }
},
}
</script>
<style scoped>
    .tab_control {
        display: flex;
        text-align: center;
        height: 44px;
        line-height: 44px;
    }
    .tab_item {
        flex: 1;
    }
    .tab_item span {
        padding: 5px;
    }
    .active {
        color: var(--color-high-text)
    }
    .active span {
        border-bottom: 2px solid var(--color-high-text);
    }
</style>