<script setup>
import useUserStore from '@/store/modules/user.js';
const userStore = useUserStore();
userStore.$reset();
</script>

<template>
  <div class="store-container">
    {{ userStore.demo }}

    <button @click="userStore.updateDemo('改变了')">改变</button>
    <button @click="userStore.$reset()">重置</button>
  </div>
</template>

<style scoped lang="scss">
.store-container {
}
</style>
