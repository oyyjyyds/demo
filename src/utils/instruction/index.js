export const vLazy = async (el, bingding) => {
  const def = await import('@/assets/vue.svg?no-inline');
  el.src = def.default;
  const observer = new IntersectionObserver((enr) => {
    if (enr[0].intersectionRatio > 0) {
      el.src = bingding.value;
      observer.unobserve(el);
    }
  });
  observer.observe(el);
};
