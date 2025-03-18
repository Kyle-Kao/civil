import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "node:path"
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url)) // 取得 `__dirname`
import { cwd } from 'node:process'

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, cwd())
  console.log('環境變數:', env)
  return {
    base: env.VITE_APP_BASE_URL || '/',
    plugins: [
      react(),
      tailwindcss()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // 讓 `@` 代表 `src`
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/src/pages/')) {
              return id.split('/src/pages/')[1].split('.')[0]; // 以檔名作為 chunk
            }
          },
        },
      }
    }
  }
})
