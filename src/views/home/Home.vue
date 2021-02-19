<template>
  <div id="home">
    <NavBar class="home-nav">
      <template #center>
        <div>首页</div>
      </template>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components:{
      NavBar
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
       console.log(res);
       this.banners=res.data.data.banner.list
       this.recommends=res.data.data.recommend.list
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
