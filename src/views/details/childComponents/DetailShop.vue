<!-- DetailShop -->
<template>
<div class='base-shop' v-if="Object.keys(shopInfo).length != 0">
    <div class="shop-head">
        <img :src="shopInfo.shopLogo" alt="">
        <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-info">
        <div class="info-left">
            <div class="sells">
                <span>{{shopInfo.cSells}}</span>
                <div>总销量</div>
            </div>
            <div class="goods-num">
                <span>{{shopInfo.cGoods}}</span>
                <div>在售商品</div>
            </div>
        </div>
        <div class="info-right">
            <div class="shop-desc" v-for="item in shopInfo.score" :key="item.name">
                <span>{{item.name}}</span>
                <span :class="{'low-score-color':!item.isBetter}">{{item.score}}</span>
                <span v-if="item.isBetter" class="high-icon">高</span>
                <span v-else class="low-icon">低</span>
            </div>
        </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
     <!-- <ul>
            <li>标题1</li>
            <li>标题2</li>
            <li>标题3</li>
            <li>标题4</li>
            <li>标题5</li>
            <li>标题6</li>
            <li>标题7</li>
            <li>标题8</li>
            <li>标题9</li>
            <li>标题10</li>
            <li>标题11</li>
            <li>标题12</li>
            <li>标题13</li>
            <li>标题14</li>
            <li>标题15</li>
            <li>标题16</li>
            <li>标题17</li>
            <li>标题18</li>
            <li>标题19</li>
            <li>标题20</li>
            <li>标题21</li>
            <li>标题22</li>
            <li>标题23</li>
            <li>标题24</li>
            <li>标题25</li>
            <li>标题26</li>
            <li>标题27</li>
            <li>标题28</li>
            <li>标题29</li>
            <li>标题30</li>
            <li>标题31</li>
            <li>标题32</li>
            <li>标题33</li>
            <li>标题34</li>
            <li>标题35</li>
            <li>标题36</li>
            <li>标题37</li>
            <li>标题38</li>
            <li>标题39</li>
            <li>标题40</li>
            <li>标题41</li>
            <li>标题42</li>
            <li>标题43</li>
            <li>标题44</li>
            <li>标题45</li>
            <li>标题46</li>
            <li>标题47</li>
            <li>标题48</li>
            <li>标题49</li>
            <li>标题50</li>
            <li>标题51</li>
            <li>标题52</li>
            <li>标题53</li>
            <li>标题54</li>
            <li>标题55</li>
            <li>标题56</li>
            <li>标题57</li>
            <li>标题58</li>
            <li>标题59</li>
            <li>标题60</li>
            <li>标题61</li>
            <li>标题62</li>
            <li>标题63</li>
            <li>标题64</li>
            <li>标题65</li>
            <li>标题66</li>
            <li>标题67</li>
            <li>标题68</li>
            <li>标题69</li>
            <li>标题70</li>
            <li>标题71</li>
            <li>标题72</li>
            <li>标题73</li>
            <li>标题74</li>
            <li>标题75</li>
            <li>标题76</li>
            <li>标题77</li>
            <li>标题78</li>
            <li>标题79</li>
            <li>标题80</li>
            <li>标题81</li>
            <li>标题82</li>
            <li>标题83</li>
            <li>标题84</li>
            <li>标题85</li>
            <li>标题86</li>
            <li>标题87</li>
            <li>标题88</li>
            <li>标题89</li>
            <li>标题90</li>
            <li>标题91</li>
            <li>标题92</li>
            <li>标题93</li>
            <li>标题94</li>
            <li>标题95</li>
            <li>标题96</li>
            <li>标题97</li>
            <li>标题98</li>
            <li>标题99</li>
            <li>标题100</li>
        </ul> -->
</div>
</template>

<script>
export default {
name: 'DetailShop',
props: {
    shopInfo: {
        type: Object,
        default() {
            return {}
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
.base-shop {
    border-bottom: 5px solid #f5f2f8;
}
.shop-head {
    margin: 20px 10px;
}
.shop-info {
    margin: 10px 25px;
    display: flex;
    color: black;
    /* justify-content: space-between; */
}
  .shop-head img{
      width: 60px;
      border: 1px solid #999;
      border-radius: 100%;
      vertical-align: middle;
  }
  .shop-head span {
      font-size: 18px;
      margin-left: 10px
  }
  .info-left {
      width: 162.5px;
      /* height: 60px; */
      display: flex;
      justify-content: space-between;
      border-right: 1px solid #999;
      padding-right: 10px;
      text-align: center;
      align-items: center;
  }
  .info-left span {
      font-size: 24px
  }
  .info-left div {
      font-size: 14px
  }
  .info-right {
      margin-left: 25px;
      width: 162.5px;
      
  }
  .info-right span {
      margin-left: 5px;
      margin-bottom: 8px;
      line-height: 20px;
  }
  .high-icon {
      background-color: #f13e3a;
  }
  .low-icon {
      background-color: #5ea732;
  }
  .shop-desc span:last-child {
      color: #fff;
      border-radius: 2px;
  }
  .shop-desc span:nth-child(2) {
      color: #f13e3a
  }
  .low-score-color {
      color: #5ea732
  }
    .shop-bottom {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>