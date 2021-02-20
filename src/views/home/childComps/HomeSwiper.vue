<template>
  <!--    轮播图-->
  <Swiper>
    <SwiperItem v-for="(item,index) in banners" :key="index">
      <a :ref="item.line">
        <img :src="item.image">
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
      components:{
        SwiperItem,
        Swiper
      }
    }
</script>

<style scoped>

</style>
