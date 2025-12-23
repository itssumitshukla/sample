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
    //Parse the content
    const data = JSON.parse(contents);
    //Return the parsed data
    return data;
  }
}

const test = async () => {
  const repo = new UsersRepository("users.json");

  const users = await repo.getAll();
  console.log(users);
};

test();
