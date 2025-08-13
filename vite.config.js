import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),

    // VitePWA({
    //   workbox: {
    //     cacheId: 'ouchenyi', //缓存名称
    //     runtimeCaching: [
    //       {
    //         urlPattern: /.*\.js.*/, //缓存文件
    //         handler: 'StaleWhileRevalidate', //重新验证时失效
    //         options: {
    //           cacheName: 'ouchenyi-js', //缓存js，名称
    //           expiration: {
    //             maxEntries: 30, //缓存文件数量 LRU算法
    //             maxAgeSeconds: 30 * 24 * 60 * 60, //缓存有效期
    //           },
    //         },
    //       },
    //     ],
    //   },
    // }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: true,
    sourcemap: false,
    minify: false,
    assetsInlineLimit: 5000,
  },
});
