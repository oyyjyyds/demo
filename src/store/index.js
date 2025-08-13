import { createPinia } from 'pinia';
import { createResetPlugin } from '@/utils/plugins/piniareset.js';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
pinia.use(createResetPlugin());
export default pinia;
