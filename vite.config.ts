import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/UNIQ/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api-images': {
        target:
          'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/UNIQ_OPTIMIZED',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-images/, ''),
      },
    },
  },
});
