<template>
  <div class="tab-bar-item" @click="itemClick">
<!--    插槽本身会被被替换，所以不能直接给其添加属性值，需要包裹一层div-->
    <div v-if="!isActive" class="tab-bar-item-img"><slot name="item-icon"></slot></div>
    <div v-else class="tab-bar-item-img"><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type:String,
          //默认是red
          default:'#d81e06'
        }
      },
      data(){
          return{
            // isActive:true
          }
      },
      computed:{
        isActive(){
          //判断当前活跃的路由与上面传进来的path时候有同个路径，如果没有则是-1
          return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
          //动态绑定样式
          return this.isActive ? {color:this.activeColor}:{}
        }
      },
      methods:{
        itemClick(){
          if(this.$route.path==this.path){
          }else{
            this.$router.replace(this.path).catch(err=>{})
          }

        }
      }
    }
</script>


<style >
  /*使其均等分，文字居中*/
  .tab-bar-item{flex: 1;text-align: center;height: 49px;font-size: 14px}
  .tab-bar-item img {
    /*vertical-align: middle;去掉图片与div之间的间隔*/
    width: 23px;height: 24px;margin-top: 3px;vertical-align: middle;margin-bottom: 2px;
  }
  .active{color: #d81e06}
</style>
