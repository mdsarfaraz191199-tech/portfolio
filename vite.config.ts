import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Deployed to https://mdsarfaraz191199-tech.github.io/portfolio/
  base: '/portfolio/',
});
