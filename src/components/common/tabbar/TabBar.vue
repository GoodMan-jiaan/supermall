<template>
  <div id="tab-bar">

<!--    使用插槽，添加东西-->
    <slot></slot>

<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/home.png">-->
<!--      首页-->
<!--    </div>-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/type.png">-->
<!--      分类-->
<!--    </div>-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/shoppingcar.png">-->
<!--      购物车-->
<!--    </div>-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/mine.png">-->
<!--      我的-->
<!--    </div>-->
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar{display: flex;background-color: #f6f6f6;
    /*使其位置居于底部*/
    position: fixed;left: 0;right: 0;bottom: 0;
    /*给tab-bar的上面添加阴影*/
    box-shadow: 0 -3px 1px rgba(100,100,100,.2);
  }

</style>
