import { defineLiteConfig } from "lite-vite";
import cleanDist from "./plugins/clean-dist";

export default defineLiteConfig({
  port: 4000,
  sourcemap: false,
  format: "esm",
  clearScreen: true,
  server: {
    open: false,
  },
  build: {
    outdir: "dist",
    minify: true,
  },
  plugins: [cleanDist],
});
