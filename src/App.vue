<script setup>
import { useAsyncButton } from '@/hooks/demo.js';
import { getData } from '@/api/index.js';
// import A from '@/components/A.vue';
// import B from '@/components/B.vue';

//懒加载指令
import { vLazy } from '@/utils/instruction/index.js';

import { useBase } from '@/hooks/base.js';

//按钮loading
// const { run, loading } = useAsyncButton(
//   async () => {
//     const response = await getData(1);
//     return response.data;
//   },
//   {
//     onSuccess(data) {
//       console.log('请求成功', data);
//     },
//     onError(error) {
//       console.log('请求失败', error);
//     },
//   }
// );

const imageList = import.meta.glob('./assets/images/*.*', { eager: true });

const arr = Object.values(imageList).map((item) => item.default);

const clickbtn = async (e) => {
  const res = await useBase({ el: '#' + e.target.id });
  console.log(res);
};

//拖拽指令
// const vMove = (el, bingding) => {
//   const mouseDown = (e) => {
//     let X = e.clientX - el.offsetLeft;
//     let Y = e.clientY - el.offsetTop;
//     el.style.cursor = 'grabbing';
//     const move = (e) => {
//       requestAnimationFrame(() => {
//         el.style.position = 'fixed';
//         el.style.willChange = 'transform';
//         // 获取当前视口的宽度和高度
//         const viewportWidth = window.innerWidth;
//         const viewportHeight = window.innerHeight;
//         // 计算元素的宽度和高度
//         const elWidth = el.offsetWidth;
//         const elHeight = el.offsetHeight;
//         // 计算元素的位置，确保不超出视口范围
//         let left = Math.max(
//           0,
//           Math.min(e.clientX - X, viewportWidth - elWidth)
//         );
//         let top = Math.max(
//           0,
//           Math.min(e.clientY - Y, viewportHeight - elHeight)
//         );
//         el.style.left = left + 'px';
//         el.style.top = top + 'px';
//       });
//     };
//     document.addEventListener('mousemove', move, { passive: true });

//     document.addEventListener('mouseup', () => {
//       el.style.cursor = 'default';
//       document.removeEventListener('mousemove', move);
//     });
//   };
//   el.addEventListener('mousedown', mouseDown);
// };
</script>

<template>
  <div class="container">
    <!-- <A></A>
    <B></B> -->
    <!-- <button @click="() => run()" :disabled="loading">
      {{ loading ? '加载中...' : '点击请求' }}
    </button> -->
    <div v-for="(item, index) in arr" :key="index">
      <img
        :src="item"
        style="height: 300px"
        v-lazy="item"
        @click="clickbtn"
        :id="`img${index}`"
      />
    </div>
    <!-- <div class="box" v-move></div>
    <div class="box" v-move></div>
    <div class="box" v-move></div> -->
  </div>
</template>

<style scoped lang="scss">
.container {
  .box {
    width: 200px;
    height: 200px;
    border: 5px solid red;
  }
}
</style>
