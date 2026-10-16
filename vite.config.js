import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { staticPagesPreview } from './scripts/preview.mjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticPagesPreview()],
  build: {
    // Les petites polices restent des fichiers locaux, compatibles avec font-src 'self'.
    assetsInlineLimit: filePath => /\.woff2?$/i.test(filePath) ? false : undefined,
  },
})
