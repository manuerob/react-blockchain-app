import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
  build: {
    rollupOptions: {
      external: ["@safe-global/safe-ethers-adapters",
      "@safe-globalThis/safe-core-sdk",
      "@safe-globalThis/safe-ethers-adapters",
      "@safe-globalThis/safe-core-sdk"]
    }
  }
});
