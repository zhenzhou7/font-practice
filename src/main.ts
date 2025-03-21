// main.js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import {getCategoryAPI} from '@/apis/testApi.js'
getCategoryAPI().then( res =>{console.log(res)})
import router from '@/router/index.js'
const app = createApp(App)

//app.use(ElementPlus)
app.use(router)
app.mount('#app')