import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/index.css'
import '@/assets/styles/app.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://172.16.20.0:8082' 

createApp(App).use(router).mount('#app')
