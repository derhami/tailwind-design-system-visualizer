import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/tailwind-design-system-visualizer-pro/',

  plugins: [
    react(),
    tailwindcss()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
