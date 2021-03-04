<template>
  <div class="cart-list">
     <Scroll class="content" :pull-up-load="true" ref="scroll">
       <CartListItem v-for="(item,index) in cartList"
                     :item-info="item"
                     :key="index"></CartListItem>
     </Scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";

  import {mapGetters} from 'vuex'
    export default {
        name: "CartList",
      components:{
        Scroll,
        CartListItem
      },
      computed:{
          ...mapGetters(['cartList'])
      },
      activated() {
          //重新计算滑动高度
          this.$refs.scroll.scroll.refresh()
      }
    }
</script>

<style scoped>
  .content{
   height: 100%;
    overflow: hidden;
  }
  .cart-list{
    height: calc(100% - 44px - 49px - 40px);
  }
</style>
