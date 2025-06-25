import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  base: '/week-3-react-js-assignment-Leemo-ui/',
  plugins: [
    react(),
    {
      name: 'github-pages-fallback',
      closeBundle: () => {
        // Copy index.html to 404.html after build
        const indexPath = resolve(__dirname, 'dist/index.html');
        const notFoundPath = resolve(__dirname, 'dist/404.html');
        copyFileSync(indexPath, notFoundPath);
      },
    },
  ],
});
