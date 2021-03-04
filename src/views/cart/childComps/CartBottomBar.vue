<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"></check-button>
      <span>全选</span>
    </div>

    <div class="price">
      合计：{{totalPrice}}
    </div>

    <div class="calculate">去计算({{CheckLength}})</div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
    export default {
      name: "CartBottomBar",
      components:{
        CheckButton
      },
      computed:{
        totalPrice(){
          //过滤外加计算
          return '￥' +this.$store.state.cartList.filter(item=>{
            return item.checked
          }).reduce((preValue,item)=>{
            return preValue+item.price*item.count
          },0).toFixed(2)
        },
        CheckLength(){
          return this.$store.state.cartList.filter(item=>item.checked).length
        }
      }
    }
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    background-color: #eeeeee;
    position: relative;
    /*bottom: 40px;*/
    line-height: 40px;
    display: flex;
  }
  .check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }
  .price{
    margin-left: 20px;
    flex: 1;
  }
  .calculate{
    width: 90px;
    background-color: red;
    color: #ffffff;
  }
</style>
