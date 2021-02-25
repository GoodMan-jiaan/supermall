<template>
  <!--    轮播图-->
  <Swiper>
    <SwiperItem v-for="(item,index) in banners" :key="index">
      <a :ref="item.line">
        <img :src="item.image" @load="imageLoad">
      </a>
    </SwiperItem>
  </Swiper>

</template>

<script>
  import {SwiperItem,Swiper} from "components/common/swiper/index.js"
    export default {
        name: "HomeSwiper",
      props:{
        banners:{
          type:Array,
          default() {
            return [];
          }
        }
      },
      data(){
        return {
          isLoad:false
        }
      },
      components:{
        SwiperItem,
        Swiper
      },
      methods:{
        imageLoad(){
          if(!this.isLoad){
            this.$emit('swiperImageLoad')
            this.isLoad=true
          }

        }
      }
    }
</script>

<style scoped>

</style>
