import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createI18n} from "vue-i18n"
import Antd, { Image } from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'ant-design-vue/dist/antd.css';
import uz from "@/locals/uz.json"
import en from "@/locals/en.json"


const app = createApp(App)
const i18n = createI18n({
    legacy: false,
    locale: 'uz',
    fallbackLocale: 'uz',
    messages:{
        uz:uz,
        en:en
    }
})
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Antd)
app.use(Image)
app.mount('#app')
