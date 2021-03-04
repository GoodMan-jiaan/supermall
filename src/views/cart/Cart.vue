<template>
  <div class="cart">
<!--    导航-->
    <NavBar class="nav-bar">
      <template #center>
        <div>购物车({{cartLength}})</div>
      </template>
    </NavBar>

<!--    商品列表-->
    <CartList></CartList>

<!--    底部汇总-->
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import {mapGetters} from 'vuex'

    export default {
      name: "Cart",
      components:{
        NavBar,
        CartList,
        CartBottomBar
      },
      computed:{
        // cartLength(){
        //   return this.$store.getters.cartLength()
        // }
       //  getters中的方法直接转化为计算属性
        ...mapGetters([
          'cartLength',
          'cartList'
        ])

        // ...mapGetters({
        //   length:'cartLength',
        // })
      }
    }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #ffffff;
    z-index: 9;
  }
</style>
