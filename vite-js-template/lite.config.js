import cleanDist from "../plugin-clean-dist/dist/index.js";
import startReport from "../plugin-start-report/dist/index.js";

export default {
  port: 4000,
  sourcemap: true,
  format: "cjs",
  build: {
    outdir: "dist",
    minify: true,
  },
  plugins: [cleanDist, startReport],
};
