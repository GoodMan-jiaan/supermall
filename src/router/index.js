
import  Vue from 'vue'
// import { createApp } from 'vue'
// import Router from "vue-router";
import { createRouter, createWebHistory } from 'vue-router'

const Home=()=>import("../views/home/Home")
const Cart=()=>import("../views/cart/Cart")
const Category=()=>import("../views/category/Category")
const Profile=()=>import("../views/profile/Profile")
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/profile',
    component:Profile
  },
]



//1、安装插件

// Vue.use(Router)

//创建router
// const router = new Router({
//   routes,
//   mode:'history'
// })

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
