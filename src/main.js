import { createApp } from 'vue'
import App from './App.vue'
//导入默认样式（下载的）
import 'normalize.css/normalize.css'
import router from "./router";
// import Vuex from 'vuex'

import store from "./store";
// import toast from "components/common/toast".use(toast)

createApp(App).use(router).use(store).mount('#app')
