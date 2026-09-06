import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { staticPagesPreview } from './scripts/preview.mjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticPagesPreview()],
})
