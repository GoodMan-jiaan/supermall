<template>
  <div>
    <keep-alive> <router-view></router-view></keep-alive>

    <TabBar>
<!--      使用该插件时要在router中配置路由，并且传入path的路由要去之一致-->
      <TabBarItem path="/home">
        <template #item-icon>
          <!--        使用别名，在webpack.base.conf.js中的resolve设置的
              前面要用~,而import里是不用的-->
          <img src="~assets/img/tabbar/home.png">
        </template>
        <template #item-icon-active>
          <img  src="~assets/img/tabbar/home1.png">
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </TabBarItem>

      <TabBarItem path="/category">
        <template #item-icon>
          <img src="~assets/img/tabbar/type.png">
        </template>
        <template #item-icon-active>
          <img  src="~assets/img/tabbar/type1.png">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </TabBarItem>

      <TabBarItem path="/cart">
        <template #item-icon>
          <img src="~assets/img/tabbar/shoppingcar.png">
        </template>
        <template #item-icon-active>
          <img  src="~assets/img/tabbar/shoppingcar1.png">
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </TabBarItem>

      <TabBarItem path="/profile">
        <template #item-icon>
          <img src="~assets/img/tabbar/mine.png">
        </template>
        <template #item-icon-active>
          <img  src="~assets/img/tabbar/mine1.png">
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </TabBarItem>

    </TabBar>
  </div>

</template>

<script>
  import TabBarItem from "components/common/tabbar/TabBarItem";
  import TabBar from "components/common/tabbar/TabBar";

    export default {
        name: "MainTabbar",
        components:{
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
