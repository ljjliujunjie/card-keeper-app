import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ⚡️ 修正：移除自定义的 CSS 配置，依赖 Vite 默认的自动检测机制。
  // 如果 PostCSS 仍然失败，问题可能出在 PostCSS 配置文件本身。
})