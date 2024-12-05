import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to all interfaces (important for Render)
    port: process.env.PORT || 4173,  // Use Render's environment PORT variable or fallback to 4173
  },
});
