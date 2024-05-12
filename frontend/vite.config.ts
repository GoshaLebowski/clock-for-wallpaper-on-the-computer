import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/clock-for-wallpaper-on-the-computer",
  plugins: [react()],
})
