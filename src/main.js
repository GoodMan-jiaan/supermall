import { createApp } from 'vue'
import App from './App.vue'
//导入默认样式（下载的）
import 'normalize.css/normalize.css'
// import router from './router'
import router from "./router";

createApp(App).use(router).mount('#app')
