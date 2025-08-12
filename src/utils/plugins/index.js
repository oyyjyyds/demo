import Loading from '@/components/loading.vue';
import { createVNode, render } from 'vue';
export default {
  install(app) {
    //创建虚拟dom
    const vNode = createVNode(Loading);
    console.log('vNode===>', vNode);
    //挂载真实dom
    render(vNode, document.body);
    app.config.globalProperties.$loading = {
      show: () => vNode.component.exposed.show(),
      hide: () => vNode.component.exposed.hide(),
      toggle: () => vNode.component.exposed.toggle(),
    };
  },
};
