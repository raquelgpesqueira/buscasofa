/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [react()],
  // base: '/buscasofa/',
})
*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/buscasofa/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [react()],
})
