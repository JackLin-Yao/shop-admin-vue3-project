import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'
import elementPlus from '@/plugins/element-plus'
import 'normalize.css/normalize.css'
import { createPinia } from 'pinia'
// 创建pinia实例
const pinia = createPinia()
// 挂载到根实例上
// import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(elementPlus)
app.use(pinia)
app.mount('#app')
