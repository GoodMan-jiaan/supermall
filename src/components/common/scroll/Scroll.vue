<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from "better-scroll"

    export default {
        name: "Scroll",
      data(){
          return{
            scroll:null
          }
      },

      props:{
          probeType:{
            type:Number,
            default:0
          },
          pullUpLoad:{
            type:Boolean,
            default: false
          }
      },
      mounted() {
        //创建BScroll
          //使用document.querySelector('.wrapper')害怕重名
          this.scroll=new BScroll(this.$refs.wrapper,{
            observeDOM:true,
            click:true,
            mouseWheel:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
          })

        //2.监听滚动位置
        this.scroll.on('scroll',(position)=>{
          // console.log(position);
          //将监听的位置传出去
          this.$emit('scroll',position)
        })

        //3.监听上拉事件
        this.scroll.on('pullingUp',()=>{
          // console.log('上拉加载');
          this.$emit('pullingUp')
        })
      },
      methods:{
          scrollTo(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
          },

          //重新计算高度
          finishPullUp(){
            this.scroll.finishPullUp()
          }

      }
    }
</script>

<style scoped>
  .wrapper{
    height: 100%;
  }
</style>
