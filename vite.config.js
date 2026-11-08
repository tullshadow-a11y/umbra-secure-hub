import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/umbra-secure-hub/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/'
    }
  }
})
