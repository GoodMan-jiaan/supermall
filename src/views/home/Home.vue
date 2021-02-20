<template>
  <div id="home">
    <NavBar class="home-nav">
      <template #center>
        <div>首页</div>
      </template>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <FeatureView></FeatureView>
    <tab-control class="tab-control"
                 :titles="['流行','新款','精选']" @tabclick="tabClick"></tab-control>
    <GoodsList :goods="showGoods"></GoodsList>

  </div>
</template>

<script>

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import GoodsList from "components/content/goods/GoodsList";
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";

  import {getHomeMultidata,getHomeGoods} from "network/home";

  export default {
    name: "Home",
    components:{
      RecommendView,
      HomeSwiper,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList
    },
    data(){
      return{
        banners:[],
        recommends:[],
        //首页最下面的数据
        goods:{
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]}
        },
        //默认为流行
        currentType:'pop'
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    //生命周期函数，刚开始创建改组件时
    created() {
     //1、请求多个数据
    this.getHomeMultidata()

       //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    methods:{
      //事件监听的方法
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
            break
        }
      },

      //网络请求
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          console.log(res.data);
          this.banners=res.data.banner.list
          this.recommends=res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          //解析数组,添加进去
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
        })
      }
    }
  }
</script>

<style>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    /*使用之前定义的变量*/
    position: fixed;
    right: 0px;
    left: 0px;
    top: 0px;
    z-index: 9;
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .tab-control{
    /*粘性定位*/
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
