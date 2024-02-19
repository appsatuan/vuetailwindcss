import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/index.css";
import axios from "axios";
import "@/assets/styles/app.css";

//axios.defaults.baseURL = "http://172.16.20.0:8082";
axios.defaults.baseURL = "http://dev.sman81.my.id:8080/api";

createApp(App).use(router).mount("#app");
