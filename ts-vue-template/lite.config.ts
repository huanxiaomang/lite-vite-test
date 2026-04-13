
import cleanDist from "./plugins/clean-dist";
import txtLoader from "./plugins/txt-loader";

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
  plugins: [cleanDist, txtLoader],
};
