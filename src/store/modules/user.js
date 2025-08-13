import { defineStore } from 'pinia';
import { ref } from 'vue';

const useUserStore = defineStore(
  'user',
  () => {
    const demo = ref('123');

    const updateDemo = (data) => {
      demo.value = data;
    };

    return {
      demo,

      updateDemo,
    };
  },
  {
    persist: {
      pick: ['demo'],
      storage: localStorage,
    },
  }
);

export default useUserStore;
