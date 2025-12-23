const fs = require("fs");

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Create a repository requires a filname");
    }

    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
    }
  }
  async getAll() {
    //Open the file
    const contents = await fs.promises.readFile(this.filename, {
      encoding: "utf8",
    });
    //Read the content
    console.log(contents);
    //Parse the content
    //Return the parsed data
  }
}

const repo = new UsersRepository("users.json");
