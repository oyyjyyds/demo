import { createApp } from 'vue';
import App from './App.vue';

import demoplugin from '@/utils/plugins/index.js';
console.log('demoplugin===>', demoplugin);
import mitt from 'mitt';

window.mitt = mitt();

const app = createApp(App);
app.use(demoplugin);
app.mount('#app');
