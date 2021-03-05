import { createApp } from 'vue'
import App from './App.vue'
//导入默认样式（下载的）
import 'normalize.css/normalize.css'
import router from "./router";
// import Vuex from 'vuex'

import store from "./store";
// import toast from "components/common/toast".use(toast)
//解决移动端三百毫秒的延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)


createApp(App).use(router).use(store).mount('#app')
