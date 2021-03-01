<template>
  <div id="detail">
    <DetailNavBar class="detail-nav"></DetailNavBar>
    <Scroll class="detail-content" ref="scroll" :pull-up-load="true" :probe-type="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
      <DetailParamInfo :param-info="paramInfo" @paramImageLoad="paramImageLoad"></DetailParamInfo>
      <DetailCommentInfo :comment-info="commentInfo"></DetailCommentInfo>
    </Scroll>

  </div>
</template>

<script>


  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";

  import {getDetail,Goods,shop,GoodsParam} from "network/detail";
  import Scroll from "components/common/scroll/Scroll";

  export default {
        name: "Detail",
      components:{
          DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        Scroll

      },
      data(){
          return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{}
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

        //获取参数信息
        this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)

        //获取评论信息
        if(data.rate.cRate!==0){
          this.commentInfo=data.rate.list[0]
        }
      })
      },
    methods:{
      //    使用图片监听，实时计算可滑动区域
      imageLoad(){
        this.$refs.scroll.scroll.refresh()
      },
      paramImageLoad(){
        this.$refs.scroll.scroll.refresh()
      }
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
  .detail-content{
    height: calc(100% - 44px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }

</style>
