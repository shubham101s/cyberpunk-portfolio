import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cartographer } from '@replit/vite-plugin-cartographer'
import themeJSON from '@replit/vite-plugin-shadcn-theme-json'
import runtimeErrorModal from '@replit/vite-plugin-runtime-error-modal'
import path from 'path'

export default defineConfig({
  base: '/cyberpunk-portfolio/',
  plugins: [react(), cartographer(), themeJSON(), runtimeErrorModal()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})