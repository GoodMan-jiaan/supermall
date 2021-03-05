import {ADD_COUNTER,ADD_TO_CART} from "./mutation-type";

export default {
  //mutations唯一的目的就是修改state中的状态
  //mutations中的每个方法尽可能完成的时间比价单一一点

  [ADD_COUNTER](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    state.cartList.push(payload)
  },
  changeTrue(state){
    state.cartList.forEach(item=>item.checked=true)
  },
  changeFalse(state){
    state.cartList.forEach(item=>item.checked=false)
  }
}
