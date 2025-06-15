import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/agb/', // Replace 'your-repo-name' with your actual GitHub repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});