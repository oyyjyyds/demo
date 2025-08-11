import { createApp } from 'vue';
import App from './App.vue';

import mitt from 'mitt';

window.mitt = mitt();

const app = createApp(App);
app.mount('#app');
