import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        cart: "cart.html",
        product: "product.html",
        confirm: "confirm.html",
      },
    },
  },
});
