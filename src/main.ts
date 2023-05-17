import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/vant'
import './styles/index.scss'
import VConsole from 'vconsole'
if (import.meta.env.MODE === 'development') {
  // eslint-disable-next-line no-new
  new VConsole()
}
createApp(App).use(router).mount('#app')
