import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    fs: {
      // Allow serving files from the monorepo root
      allow: ['../..'],
    },
  },
  optimizeDeps: {
    include: ['@rainbow-me/rainbowkit'],
  },
})
