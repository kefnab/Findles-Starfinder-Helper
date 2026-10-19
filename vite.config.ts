import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  publicDir: 'static',
  plugins: [svelte()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      name: 'findles-starfinder-helper',
      formats: ['es'],
      fileName: () => 'index.js'
    }
  }
});