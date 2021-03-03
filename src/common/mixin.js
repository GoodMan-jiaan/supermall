//混入(整理重复的函数)
//函数内部的代码不能抽，例如滚动显示出是否显示BackTop
import BackTop from "components/content/backTop/BackTop"
export const backTopMixin={
  components:{
    BackTop
  },
  data(){
    return{
      isShowBackTop:false
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    }
  }
}
