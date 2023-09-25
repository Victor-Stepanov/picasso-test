import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/picasso-test/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      app: `${path.resolve(__dirname, './src/app/')}`,
      entities: `${path.resolve(__dirname, './src/entities/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      shared: `${path.resolve(__dirname, './src/shared')}`,
    },
  },
})
