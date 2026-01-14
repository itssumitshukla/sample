const fs = require("fs");
const path = require("path");

class Runner {
  constructor() {
    this.files = [];
  }
  async collectFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath);
    for (let file of files) {
      const filepath = path.join(targetPath, file);
      const stats = await fs.promises.lstat(filepath);

      if (stats.file() && file.includes(".test.js")) {
        this.testFiles.push({ name: filepath });
      } else if (stats.isDirectory()) {
        console.log(object);
      }
    }
  }
}

module.exports = Runner;
