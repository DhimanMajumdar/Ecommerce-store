import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import flowbitePlugin from"flowbite/plugin"
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    flowbitePlugin(),
  ],
  server:{
    proxy:{
      "/api/":"http://localhost:5000",
    }
  }
})