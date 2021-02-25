<template>

<!--  注意类名的覆盖，不能随便取名-->
    <swiper class="detail-swiper" v-if="topImages">
      <swiper-item  v-for="(item,index) in topImages" :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>

</template>

<script>
  import {SwiperItem,Swiper} from "components/common/swiper/index.js"

    export default {
        name: "DetailSwiper",
      components:{
        Swiper,
        SwiperItem
      },
      props:{
          topImages:{
            type:Array,
            default(){
              return[]
            }
          }
      }
    }
</script>

<style >
.detail-swiper{
  height: 300px;
  overflow: hidden;
}

</style>
