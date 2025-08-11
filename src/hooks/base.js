export function useBase(options) {
  const base64 = (el) => {
    console.log('el===>', el.width, el.height);
    const canvas = document.createElement('canvas');
    // 设置画布的宽度和高度与图片一致
    canvas.width = el.width;
    canvas.height = el.height;
    const ctx = canvas.getContext('2d');

    ctx?.drawImage(el, 0, 0, el.width, el.height);
    return canvas.toDataURL('image/png');
  };

  return new Promise((resolve) => {
    const img = document.querySelector(options.el);
    if (img.complete) {
      // 如果图片已经加载完成，直接返回 base64 编码
      resolve({ baseUrl: base64(img) });
    } else {
      img.onload = () => {
        resolve({ baseUrl: base64(img) });
      };
    }
  });
}
