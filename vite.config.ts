import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@routes': resolve(__dirname, './src/routes'),
      '@styles': resolve(__dirname, './src/styles'),
      '@icons': resolve(__dirname, './src/assets/icons'),
      '@images': resolve(__dirname, './src/assets/images')
    }
  }
})
