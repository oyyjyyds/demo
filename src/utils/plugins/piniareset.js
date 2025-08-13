// src/store/plugins/piniaResetPlugin.js
export function createResetPlugin() {
  return ({ store }) => {
    // 保存初始状态的副本
    const initialState = JSON.parse(JSON.stringify(store.$state));

    // 定义 reset 方法
    store.$reset = () => {
      store.$patch(initialState);
    };
  };
}
