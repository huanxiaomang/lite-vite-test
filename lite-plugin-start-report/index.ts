import { exec } from "node:child_process";
import { join } from "node:path";
import { existsSync } from "node:fs";

export default {
  name: "start-report",
  buildEnd() {
    const reportPath = join(process.cwd(), "dist", "build-report.html");

    // 构建报告在所有 buildEnd 钩子执行完毕后才写入磁盘，
    // 因此需要延迟检查文件是否存在
    const maxRetries = 10;
    const interval = 500;
    let retries = 0;

    const tryOpen = () => {
      if (existsSync(reportPath)) {
        console.log("[start-report] 📊 正在打开构建报告...");
        const cmd =
          process.platform === "darwin"
            ? "open"
            : process.platform === "win32"
              ? "start"
              : "xdg-open";
        exec(`${cmd} ${reportPath}`);
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(tryOpen, interval);
      } else {
        console.log("[start-report] ⚠️ 未找到构建报告");
      }
    };

    setTimeout(tryOpen, interval);
  },
};
