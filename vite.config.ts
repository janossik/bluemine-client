import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      pages: path.resolve(__dirname, "src", "views", "pages"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["./src/assets/react.svg"],
      devOptions: {
        enabled: true,
      },
      manifest: {
        start_url: "/",
        id: "/",
        display: "standalone",
        name: "The blue mine app",
        short_name: "Bluemine",
        description: "My Awesome App Bluemine",
        theme_color: "#000000",
        protocol_handlers: [
          {
            protocol: "web+bluemine",
            url: "/?url=%s",
          },
        ],
        icons: [
          { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "/maskable_icon_x192.png", sizes: "192x192", type: "image/png" },
          { src: "/maskable_icon_x384.png", sizes: "384x384", type: "image/png" },
          { src: "/maskable_icon_x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
});
