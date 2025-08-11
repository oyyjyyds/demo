export const vLazy = async (el, bingding) => {
  const def = await import('@/assets/vue.svg?no-inline');
  el.src = def.default;
  // 设置 rootMargin 让元素露出一些才触发逻辑，这里设置为元素露出 100px 时触发
  const observer = new IntersectionObserver(
    (enr) => {
      if (enr[0].intersectionRatio > 0) {
        el.src = bingding.value;
        observer.unobserve(el);
      }
    },
    { rootMargin: '-100px' }
  );
  observer.observe(el);
};
