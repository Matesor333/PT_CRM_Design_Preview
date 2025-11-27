import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: '127.0.0.1', // Forces IPv4 loopback only (secure)
        port: 5173,        // Optional: ensures port stays consistent
    },
  plugins: [react()],
})
