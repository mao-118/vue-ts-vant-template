import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/plugins/vant';
createApp(App).use(router).mount('#app');
