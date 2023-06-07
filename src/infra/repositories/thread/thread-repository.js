module.exports = class ThreadRepository {
  #database;

  constructor(database) {
    this.#database = database;
  }

  async getOne(boardName, threadId) {
    const databaseLength = this.#database.boards.length;

    return await new Promise((resolve) => {
      for (let index = 0; index < databaseLength; index++) {
        if (
          this.#database.boards[index].name.toLowerCase() ===
          boardName.toLowerCase()
        ) {
          const foundThreads = this.#database.boards[index].threads.filter(
            (item) => item._id === threadId
          );

          resolve(foundThreads.length > 0 ? foundThreads[0] : null);
        }
      }

      resolve(null);
    });
  }

  async getAll() {}

  async create(boardName, newThread) {
    const databaseLength = this.#database.boards.length;

    return await new Promise((resolve) => {
      for (let index = 0; index < databaseLength; index++) {
        if (
          this.#database.boards[index].name.toLowerCase() ===
          boardName.toLowerCase()
        ) {
          this.#database.boards[index].threads = [
            ...this.#database.boards[index].threads,
            newThread,
          ];
          resolve(newThread);
        }
      }

      resolve(null);
    });
  }

  async update(boardName, threadId) {
    const databaseLength = this.#database.boards.length;

    return await new Promise((resolve) => {
      for (let index = 0; index < databaseLength; index++) {
        if (
          this.#database.boards[index].name.toLowerCase() ===
          boardName.toLowerCase()
        ) {
          this.#database.boards[index].threads = this.#database.boards[
            index
          ].threads.map((item) => ({
            ...item,
            reported: item._id === threadId ? true : item.reported,
          }));

          resolve(this.#database.boards[index]);
        }
      }

      resolve(null);
    });
  }

  async delete(boardName, threadId, deletePassword) {
    const databaseLength = this.#database.boards.length;

    return await new Promise((resolve) => {
      for (let index = 0; index < databaseLength; index++) {
        if (
          this.#database.boards[index].name.toLowerCase() ===
          boardName.toLowerCase()
        ) {
          let rightPassword = true;

          this.#database.boards[index].threads = this.#database.boards[
            index
          ].threads.filter((item) => {
            if (item._id === threadId) {
              if (item.delete_password !== deletePassword) {
                rightPassword = false;

                return true;
              }
              return false;
            }

            return true;
          });
          resolve(rightPassword);
        }
      }

      resolve(null);
    });
  }
};
