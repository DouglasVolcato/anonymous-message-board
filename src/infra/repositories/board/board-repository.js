module.exports = class BoardRepository {
  #database;

  constructor(database) {
    this.#database = database;
  }

  async getOne(boardName) {
    const databaseLength = this.#database.boards.length;

    return await new Promise((resolve) => {
      for (let index = 0; index < databaseLength; index++) {
        if (
          this.#database.boards[index].name.toLowerCase() ===
          boardName.toLowerCase()
        ) {
          resolve(this.#database.boards[index]);
        }
      }

      resolve(null);
    });
  }

  async getAll() {}

  async create(boardData) {
    return await new Promise((resolve) => {
      this.#database.boards = [...this.#database.boards, boardData];

      resolve(boardData);
    });
  }

  async update() {}

  async delete() {}
};
