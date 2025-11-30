import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 关键：确保导入了 Tailwind CSS 入口文件
import './index.css' 
// 修正：从正确的 OneFile.jsx 导入主组件 CardKeeperApp
// 路径修正：现在使用相对路径，假设 OneFile.jsx 与 main.jsx 在同一文件夹 (src/)
import CardKeeperApp from './OneFile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardKeeperApp />
  </StrictMode>,
)