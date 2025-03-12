import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { patchCssModules } from 'vite-css-modules'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    patchCssModules(),
    Sitemap({ hostname: 'https://olhai.tech/' }),
  ],
  publicDir: 'public',
})
