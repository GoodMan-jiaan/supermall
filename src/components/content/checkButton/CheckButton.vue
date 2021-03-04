<template>
    <div class="check-button" :class="{check:isChecked}">
      <img src="~assets/img/cart/tick.svg">
    </div>
</template>

<script>
    export default {
      name: "CheckButton",
      props:{
          isChecked:{
            type:Boolean,
            defaul:false
          }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .check-button{
    border-radius:50%;
    border: solid 2px #aaaaaa;
  }
  .check{
    background-color: red;
    border: solid 2px red;
  }
</style>
