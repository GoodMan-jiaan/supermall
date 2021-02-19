<template>
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center" ></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style>
  .nav-bar{
    display: flex;
    height: 44px;
    text-align: center;
    /*line-height文字可以上下活动,需要内容进行撑开*/
    line-height: 44px;
    /*给tab-bar的上面添加阴影*/
    box-shadow: 0 1px 1px rgba(100,100,100,.2);
  }

  .left,.right{
    width: 60px;

  }

  .center{
    /*当其他部分有确切的值时，flex等于1能使其他部分填充*/
    /*flex:1表达的是比例，因为这里只有一个比例，所以他就占据了剩下所有空间的百分之百*/
    flex: 1;

  }
</style>
