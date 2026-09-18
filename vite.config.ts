import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // If you deploy to https://<user>.github.io/<repo>/, set base to '/<repo>/'.
  base: '/',
});
