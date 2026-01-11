import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [devtools(), solidPlugin({ ssr: false }), tailwindcss(),],
  server: {
    port: 3000,
    allowedHosts: ['anttonikoivu.com']
  },
  build: {
    target: 'esnext',
  },
});
