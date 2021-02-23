<template>
  <div id="home">
    <NavBar class="home-nav">
      <template #center>
        <div>首页</div>
      </template>
    </NavBar>
    <Scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']" @tabclick="tabClick"></tab-control>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll >

<!--    组件的监听需要时使用@click.native
        监听组件根元素的原生事件
        v-show为true表示显示-->
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import GoodsList from "components/content/goods/GoodsList";
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop"

  import {getHomeMultidata,getHomeGoods} from "network/home";

  export default {
    name: "Home",
    components:{
      RecommendView,
      HomeSwiper,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
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
        currentType:'pop',
        isShowBackTop:false
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

      //监听滚动事件
      //当滑到一定高度时，反对顶部按钮出现
      contentScroll(position){
        this.isShowBackTop=-position.y>1000
      },

      //加载更多
      loadMore(){
        this.getHomeGoods(this.currentType)


        //因为图片加载属于异步加载，再图片还没加载完时就已经计算出高度，
        //所以这里需要在图片加载完添加下面代码解决这个bug
        //重新计算可滚动区域，
        this.$refs.scroll.scroll.refresh()
      },
      //返回顶部
      backClick(){
        //使用ref获取到scroll组件中data里面的scroll属性
        // this.$refs.scroll.scroll.scrollTo(0,0,500)
        //调用scroll组件中的自定义的scrollTo的方法
        this.$refs.scroll.scrollTo(0,0,500)
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

          //重新计算高度
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;

    /*高度为100个饰扣*/
    height: 100vh;
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

  .content{
    /*这个函数算出滚动条的到高度，49是下面的tabber,上面#home属性中有个padding，所以导航的不用减*/
    height: calc(100% - 49px);
    overflow:hidden;
  }
</style>
