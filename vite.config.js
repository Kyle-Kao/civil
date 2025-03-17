import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd())
  console.log('環境變數:', env)
  return {
    base: env.VITE_APP_BASE_URL || '/',
    // base: import.meta.env.MODE === 'production' ? '/civil/' : '/',
    plugins: [react()],
  }
})
