<template>
  <div id="detail">
    <DetailNavBar class="detail-nav"></DetailNavBar>
    <Scroll class="content" :pull-up-load="false">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detail-info="detailInfo"></DetailGoodsInfo>
    </Scroll>

  </div>
</template>

<script>


  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

  import {getDetail,Goods,shop} from "network/detail";
  import Scroll from "components/common/scroll/Scroll";

  export default {
        name: "Detail",
      components:{
          DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        Scroll
      },
      data(){
          return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{}
          }
      },created() {
          //1、保存传入的iid
          this.iid=this.$route.params.iid
      //2、根据iid请求详情数据
      getDetail(this.iid).then(res=>{
        const data=res.result
        //获取顶部的轮播数据图片
        this.topImages=data.itemInfo.topImages
        //获取商品信息
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        //创建店铺信息
        this.shop=new shop(data.shopInfo)

        //获取详情信息
        this.detailInfo=data.detailInfo
      })
      }

    }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
</style>
