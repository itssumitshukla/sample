const fs = require("fs");
const patj = require("path");

class Runner {
  constructor() {
    this.files = [];
  }
  async collectFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath);
    for (let file of files) {
      const filepath = path.join(targetPath, file);
      const stats = await fs.promises.lstat(filepath);
    }
  }
}

module.exports = Runner;
