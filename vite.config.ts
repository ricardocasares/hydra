import { defineConfig } from "vite";
import ssl from "vite-plugin-mkcert";
import auto from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    ssl(),
    auto({
      dts: false,
      dirs: ["./src/lib"],
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
});
