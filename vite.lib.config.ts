import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import preprocess from "svelte-preprocess";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "WordArt",
      fileName: (format) => `wordart.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["svelte"],
      output: {
        globals: {
          svelte: "Svelte",
        },
      },
    },
    outDir: "dist",
    sourcemap: true,
  },
  plugins: [
    svelte({
      preprocess: preprocess(),
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
