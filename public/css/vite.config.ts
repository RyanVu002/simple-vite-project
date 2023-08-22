import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import mkcert from 'vite-plugin-mkcert'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mkcert()],
  server: {
    https: true,
    port: 3000,
    proxy: {
      '^/api': {
        changeOrigin: true,
        target: 'https://localhost:5001',
        secure: false,
        rewrite: path => {
          return path.replace('/^/api/', '')
        }
      },
      '^/properties': {
        changeOrigin: true,
        target: 'https://localhost:5001',
        secure: false,
        rewrite: path => {
          return path.replace('/^/api/', '')
        }
      },
      '^/hubs': {
        changeOrigin: true,
        target: 'https://localhost:5001',
        secure: false,
        rewrite: path => {
          return path.replace('/^/api/', '')
        }
      },
      '^/lib': {
        changeOrigin: true,
        target: 'https://localhost:5001',
        secure: false,
        rewrite: path => {
          return path.replace('/^/api/', '')
        }
      },
      '^/css': {
        changeOrigin: true,
        target: 'https://localhost:5001',
        secure: false,
        rewrite: path => {
          return path.replace('/^/api/', '')
        }
      },
      '^/WebUI.styles.css': {
        changeOrigin: true,
        target: 'https://localhost:5001',
        secure: false,
        rewrite: path => {
          return path.replace('/^/api/', '')
        }
      },
      '^/Identity': {
        changeOrigin: true,
        target: 'https://localhost:5001',
        secure: false,
        rewrite: path => {
          console.log(path)
          return path.replace('/^/api/', '')
        }
        // rewrite: path => {
        //   console.log(path);
        //   return path.replace("/^/api/", "");
        // },
      }
    }
  },
  resolve: {
    alias: {
      "devextreme/ui": 'devextreme/esm/ui',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
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
