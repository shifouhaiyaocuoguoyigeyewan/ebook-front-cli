import { createApp } from 'vue'
import App from './App.vue'
import animated from 'animate.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as Icons from '@element-plus/icons-vue';
// import router from './router/index';
// import store from "./store/index";
// import * as echarts from 'echarts';
// import Button from "@/components/Button.vue"

const app = createApp(App)
// app.config.globalProperties.$echarts = echarts
// app.component('Button',Button);
// app.use(router)
// app.use(store)
app.use(ElementPlus)
app.use(animated)
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
  })
app.mount('#app')

