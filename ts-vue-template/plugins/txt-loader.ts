export default {
  name: "txt-loader",
  async transform(content: string | Uint8Array, filePath: string) {
    if (!filePath.endsWith(".txt") || typeof content !== "string") return null;
    console.log(`[txt-loader] 📄 转换文本文件: ${filePath}`);
    const escaped = JSON.stringify(content.trim());
    return {
      code: `export default ${escaped};`,
      mimeType: "application/javascript",
      map: null,
    };
  },
};
