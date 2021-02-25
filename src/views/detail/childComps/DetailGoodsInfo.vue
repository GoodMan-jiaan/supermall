<template>
  <div v-if="Object.keys(detailInfo).length !==0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad">
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
      props:{
          detailInfo:{
            type:Object
          }
      },
      data(){
          return{
            counter:0,
            imagesLength:0
          }
      },
      methods:{
          imgLoad() {
            if(++this.counter=== this.imagesLength){
              this.$emit('imageLoad')
            }
          }
      },
    //  监听属性
      watch:{
          detailInfo(){
            this.imagesLength=this.detailInfo.detailImage[0].list.length
          }
      }
    }
</script>

<style scoped>
.goods-info{
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc{
  font-size: 13px;
  margin-bottom: 20px;
}
.desc{
  padding: 0 10px 0 10px;
}
.info-list img{
  width: 100%;
}
  .info-key{
    font-size: 15px;
    font-weight: 600;
    margin-left: 20px;
  }
</style>
