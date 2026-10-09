import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        seyi: resolve(import.meta.dirname, 'seyi.html'),
      },
    },
  },
})