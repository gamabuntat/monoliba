import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [],
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/lib/main.js'),
      name: 'ds',
      formats: ['es'],
      fileName: 'ds',
    },
  },
});
