<script setup>
const clickbtn = () => {
  mitt.emit('click', 'a按钮被点击了');
};
</script>

<template>
  <div class="acontainer">
    <button @click="clickbtn">a按钮</button>
  </div>
</template>

<style scoped lang="scss"></style>
