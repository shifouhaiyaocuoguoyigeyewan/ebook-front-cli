import { createApp } from 'vue'
import App from './App.vue'
import animated from 'animate.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as Icons from '@element-plus/icons-vue';
import axios from 'axios';
import router from './router/index';
// import store from "./store/index";
// import * as echarts from 'echarts';

const app = createApp(App)
//Vue3.0中不支持Vue.prototype的方式来挂载axios了，改用下面的方法挂载
app.config.globalProperties.$http = axios;
// app.config.globalProperties.$echarts = echarts
// app.component('Button',Button);
app.use(router)
// app.use(store)
app.use(ElementPlus)
app.use(animated)
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
  })
app.mount('#app')

