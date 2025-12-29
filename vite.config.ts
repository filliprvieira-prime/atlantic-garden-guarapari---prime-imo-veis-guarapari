import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Certifique-se de que o nome do repositório no GitHub seja exatamente 'atlanticgarden-primeguarapari'
export default defineConfig({
  plugins: [react()],
  base: '/atlanticgarden-primeguarapari/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
});