import cleanDist from "../lite-plugin-clean-dist/dist/index.js";
import txtLoader from "../lite-plugin-txt-loader/dist/index.js";
import startReport from "../lite-plugin-start-report/dist/index.js";

export default {
  port: 3001,
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
  plugins: [cleanDist, txtLoader, startReport],
};
