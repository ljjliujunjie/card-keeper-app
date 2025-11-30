import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// 🚨 修正: 解决 Tailwind CSS 版本更新导致的插件加载错误。
// 引入新的 PostCSS 插件包 @tailwindcss/postcss 来替换主 tailwindcss 包作为 PostCSS 插件的使用。
export default defineConfig(async () => {
  // 1. 异步加载新的 Tailwind PostCSS 插件
  const tailwindPlugin = (await import('@tailwindcss/postcss')).default;
  // 2. 异步加载 autoprefixer
  const autoprefixer = (await import('autoprefixer')).default;

  return {
    plugins: [react()],

    css: {
      // 嵌入 PostCSS 插件，确保它们在构建时运行
      postcss: {
        plugins: [
          // 使用新的 tailwindPlugin 函数，并传递配置文件路径
          tailwindPlugin('./tailwind.config.js'), 
          autoprefixer,
        ],
      },
    },

    build: {
      // 强制使用 esbuild 进行 CSS 最小化
      cssMinify: 'esbuild',
    }
  };
});