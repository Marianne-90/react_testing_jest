import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{ // <-- configuración de Vitest
    environment:'happy-dom'
  }
})
