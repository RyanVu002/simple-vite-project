import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import mkcert from 'vite-plugin-mkcert'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mkcert()],
  resolve: {
    alias: {
      "devextreme/ui": 'devextreme/esm/ui',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  build: {
    rollupOptions: {
        plugins: [
            {
                name: 'no-treeshake',
                transform(_, id) {
                    if (id.includes('ui/data_grid')) {
                        return { moduleSideEffects: 'no-treeshake' }
                    }
                }
            }
        ]
    }
  }
})
