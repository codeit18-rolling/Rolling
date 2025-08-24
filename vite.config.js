import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "@prerenderer/rollup-plugin";
import puppeteerRenderer from "@prerenderer/renderer-puppeteer";
import generateRoutes from "./src/service/SEO/generateRoutes";

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const routes = await generateRoutes(env.VITE_API_BASE_URL);

  return {
    plugins: [
      react(),
      prerender({
        routes,
        renderer: puppeteerRenderer,
        rendererOptions: {
          maxConcurrentRoutes: 1,
          renderAfterTime: 500,
        },
      }),
    ],
    build: {
      assetsInlineLimit: 0,
    },
  };
});
