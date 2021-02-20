<template>
  <div id="home">
    <NavBar class="home-nav">
      <template #center>
        <div>首页</div>
      </template>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components:{
      RecommendView,
      NavBar,
      HomeSwiper
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    //生命周期函数，刚开始创建改组件时
    created() {
     //1、请求多个数据
     getHomeMultidata().then(res=>{
       console.log(res.data.recommend.list);
       this.banners=res.data.banner.list
       this.recommends=res.data.recommend.list

     })
    }
  }
</script>

<style scoped>
  .home-nav{
    /*使用之前定义的变量*/
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
