<script setup>
import { onUnmounted } from 'vue';

const demo = (msg) => {
  console.log('msg===>', msg);
};
mitt.on('click', demo);
setTimeout(() => {
  mitt.off('click', demo);
}, 5000);
</script>

<template>
  <div class="bcontainer">
    <button>b按钮</button>
  </div>
</template>

<style scoped lang="scss"></style>
