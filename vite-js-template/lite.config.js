export default {
  port: 4000,
  sourcemap: true,
  format: "cjs",
  build: {
    outdir: "dist",
    minify: true,
  },
  plugins: [
    {
      name: "clean-dist",
      buildStart() {
        console.log("[clean-dist] 🧹 构建开始，dist 目录将被清理");
      },
      buildEnd() {
        console.log("[clean-dist] ✅ 构建完成");
      },
    },
  ],
};
