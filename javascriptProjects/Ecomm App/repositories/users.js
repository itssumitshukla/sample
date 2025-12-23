const fs = require("fs");

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Create a repository requires a filname");
    }

    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (error) {}
  }
}

new UsersRepository();
