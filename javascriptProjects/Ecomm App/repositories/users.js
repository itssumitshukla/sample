const fs = require("fs");
const crypto = require("crypto");
const { error } = require("console");

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
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf8",
      })
    );
  }

  async create(attrs) {
    attrs.id = this.randomId();
    //Save email and pass
    const records = await this.getAll();
    records.push(attrs);
    await this.writeAll(records);
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }

  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }

  async getOne(id) {
    const records = await this.getAll();
    return records.find((records) => records.id === id);
  }

  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => record.id !== id);
    await this.writeAll(filteredRecords);
  }

  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);
    if (!record) {
      throw new Error(`Record with id ${id} not found`);
    }
  }
}

const test = async () => {
  const repo = new UsersRepository("users.json");
  //   await repo.create({
  //     email: "test@test.com",
  //     password: "password",
  //   });

  //   const users = await repo.getAll();

  const user = await repo.getOne("772a6480");

  console.log(user);
};

test();
