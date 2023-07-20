import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const proxyConfig = {
  '/api': {
    target: 'http://34.204.6.47:5000/v1/',
    changeOrigin: true,
  },
};


export default defineConfig({
  plugins: [vue()],
  server:{
    proxy: proxyConfig,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
