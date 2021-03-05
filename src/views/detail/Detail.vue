<template>
  <div id="detail">
<!--    作为属性的时候最好使用-号来表示，不要用驼峰-->
    <DetailNavBar class="detail-nav"
                  @title-click="titleClick"
                  ref="nav"></DetailNavBar>
    <Scroll class="detail-content"
            ref="scroll"
            :pull-up-load="true"
            :probe-type="3"
            @scroll="contentScroll">



      <detail-swiper :top-images="topImages"></detail-swiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
      <DetailParamInfo ref="params" :param-info="paramInfo" @paramImageLoad="paramImageLoad"></DetailParamInfo>
      <DetailCommentInfo ref="comment" :comment-info="commentInfo"></DetailCommentInfo>
      <GoodsList ref="recommend" :goods="recommends"></GoodsList>

    </Scroll>

    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
    <DetailBottomBar @addCart="addToCart"></DetailBottomBar>
<!--    <Toast :message="message" :show="show"></Toast>-->
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
  import DetailBottomBar from "./childComps/DetailBottomBar";
  // import BackTop from "components/content/backTop/BackTop"


  import GoodsList from "components/content/goods/GoodsList";
  // import Toast from "components/common/toast/Toast";

  import {getDetail,Goods,shop,GoodsParam,getRecommend} from "network/detail";
  import Scroll from "components/common/scroll/Scroll";
  import {debouce} from "../../common/utils";
  import {backTopMixin} from "common/mixin"

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
        DetailBottomBar,
        // Toast,

        GoodsList,
        // BackTop,

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
            commentInfo:{},
            recommends:[],
            themeTopYs:[],//组件的位置数组
            getThemeTopY:null,
            currentIndex:0,
            // isShowBackTop:false
            // message:'',
            // show:false
          }
      },
    mixins:[backTopMixin],
    created() {
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

        //防抖
        this.getThemeTopY=debouce(()=>{
          //获取组件的位置
          this.themeTopYs=[]
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
          this.themeTopYs.push(Number.MAX_VALUE)//数字中的最大值
          // console.log(this.themeTopYs);
        },100)


        //等上面的数据渲染完在执行函数
        //根据最新的数据，对应的DOM是已经渲染出来
        //但是图片依然是没有加载完（目前获取到offsetTop不包含其中的图片）
        //offsetTop的值不对，一般都是图片的原因
        // this.$nextTick(()=>{
        //   //获取组件的位置
        //   this.themeTopYs=[]
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        //   console.log(this.themeTopYs);
        // })

      })

      //请求推荐信息
      getRecommend().then(res=>{
          const list =res.data.list
        this.recommends =list
      })
      },


    methods:{
      //    使用图片监听，实时计算可滑动区域shop_id
      imageLoad(){
        this.$refs.scroll.scroll.refresh()
        this.getThemeTopY()

      },
      paramImageLoad(){
        this.$refs.scroll.scroll.refresh()
      },
      titleClick(index){
        //滚动到特定位置
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position){
        //获取y值
        const positoinY=-position.y

        //2、positoinY和主题中的值进行对比

        // for(let i in this.themeTopYs) {
          //i为字符串,当i为1时，i+1会为11
          //而且这里i会越界
          // if(positoinY>this.themeTopYs[i] && positoinY < this.themeTopYs[i+1]){
          //   console.log(i);
          // }
          let length=this.themeTopYs.length
          for(let i =0;i<length-1;i++){

            if(this.currentIndex !== i &&(positoinY >= this.themeTopYs[i] && positoinY< this.themeTopYs[i+1])){
                this.currentIndex=i
                //数据传入组件
                this.$refs.nav.currentIndex=this.currentIndex
            }

          // if(this.currentIndex!== i &&((i < length - 1 && positoinY >= this.themeTopYs[i]&&positoinY<this.themeTopYs[i+1])||
          //   (i==length-1 && positoinY >= this.themeTopYs[i]))){
          //   this.currentIndex=i
          //   //数据传入组件
          //   this.$refs.nav.currentIndex=this.currentIndex
          // }
        }

        this.isShowBackTop=-position.y>1000
        },
      // }
      // backClick(){
      //   this.$refs.scroll.scrollTo(0,0,500)
      // }

      addToCart(){
        //1、获取购物车需要张氏的信息
        const product={}
        product.image=this.topImages[0]
        product.title=this.goods.title
        product.desc=this.goods.desc
        product.price=this.goods.realPrice
        product.iid=this.iid

        //将商品添加到购物车
       // this.$store.commit('addCart',product)  //调用vuex中mutations
        this.$store.dispatch('addCart',product).then(res=>{
          // this.show=true
          // this.message=res;
          //
          // setTimeout(()=>{
          //   this.show=false;
          //   this.message=''
          // },1500)
          // this.$toast.show(res,2000)
        })
      }
    },


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
    height: calc(100% - 44px - 49px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }

</style>
