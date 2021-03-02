import{request} from "./request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}


//详情页的推荐信息
export function getRecommend() {
  return request({
    url:'/recommend'
  })
}



//创建类，导出，打包数据（在Detail中调用）
export class Goods {
  //构造函数（类似于java的构造函数）
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldcount=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.services=services
    this.realPrice=itemInfo.lowNowPrice
  }
}
//使用方法
// const g=new Goods()


export class shop {
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name
    this.fans=shopInfo.cFans
    this.sells=shopInfo.cSells
    this.score=shopInfo.score
    this.goodsCount=shopInfo.cGoods

  }

}



export class GoodsParam{
  constructor(info,rule) {
    this.image=info.images ? info.images[0]:""
    this.infos=info.set
    this.sizes=rule.tables
  }
}
