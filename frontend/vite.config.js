import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SAVOUR-AND-CRUST-RESTAURENT-SITE/',
  server: {
    port: 5173,
  },
})