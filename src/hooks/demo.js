import { ref, } from "vue";


export function useAsyncButton(requestFn,options) {
   const loading=ref(false)
      const run = async (...args) => {
      if (loading.value) return;
      try {
        loading.value = true;
        const data = await requestFn(...args);
       
 
        options.onSuccess?.(data);
        return data;
      } catch (error) {
        options.onError?.(error);
        throw error;
      } finally {
        loading.value = false;
      }
    };


  return {
    loading,
    run
  }
 
}

