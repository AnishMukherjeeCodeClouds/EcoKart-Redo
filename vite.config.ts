import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    allowedHosts: ["8e3839440254.ngrok-free.app"],
  },
});
