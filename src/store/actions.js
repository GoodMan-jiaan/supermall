import {ADD_COUNTER,ADD_TO_CART} from "./mutation-type";

export default {
  addCart(context,payload){
    // payload:新添加的商品
    // let oldProduct=null
    // for(let item of state.cartList){
    //   if(item.iid==payload.iid){
    //     oldProduct=item
    //   }
    // }

    // let oldProduct=state.cartList.find(function (item) {
    //   return item.iid===payload.iid
    // })

    return new Promise((resolve,reject)=>{
      let oldProduct=context.state.cartList.find(item => item.iid===payload.iid)

      //2、判断oldProduct
      if(oldProduct){
        // oldProduct.count+=1
        context.commit(ADD_COUNTER,oldProduct)
        resolve('当前商品加一')
      }else{
        payload.count=1
        payload.checked=true
        // state.cartList.push(payload)
        context.commit(ADD_TO_CART,payload)
        resolve('添加新的商品')
      }
    })


  },
  actionsCheckClick(context,isSelectAll){
    if(isSelectAll){
      context.commit('changeFalse')
    }else{
      context.commit('changeTrue')
    }

  }
}
