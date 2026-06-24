import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SAVOR-AND-CRUST-RESTAURANT/',
  server: {
    port: 5173,
  },
})