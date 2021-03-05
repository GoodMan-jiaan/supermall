import Toast from "./Toast";
const obj={}


obj.install=function (vue) {
  // console.log('执行了obj的函数',vue);
  // document.body.appendChild(Toast.$el)
  //1、创建组件构造器
  const toastContrustor =vue.extends(Toast)
  // const toastContrustor={
  //   extends:Toast
  // }

  //2、new的方式，根据组件构造器，恶意创建出来一个组件对象
  const toast=new toastContrustor()

  //3、将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //4、toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  vue.prototype.$toast=Toast
}

export default obj
