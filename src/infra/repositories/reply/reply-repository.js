module.exports = class ReplyRepository {
  #database;

  constructor(database) {
    this.#database = database;
  }

  async getOne() {}

  async getAll() {}

  async create(boardName, threadId, replyData) {
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
            replies:
              item._id === threadId
                ? [...item.replies, replyData]
                : item.replies,
          }));

          resolve(this.#database.boards[index]);
        }
      }

      resolve(null);
    });
  }

  async update(boardName, threadId, replyId) {
    const databaseLength = this.#database.boards.length;

    return await new Promise((resolve) => {
      for (let index = 0; index < databaseLength; index++) {
        if (
          this.#database.boards[index].name.toLowerCase() ===
          boardName.toLowerCase()
        ) {
          let foundReply = {};

          this.#database.boards[index].threads = this.#database.boards[
            index
          ].threads.map((item) => {
            if (item._id === threadId) {
              const replyList = item.replies.map((reply) => ({
                ...reply,
                reported: reply._id === replyId ? true : reply.reported,
              }));
              foundReply = { ...item, replies: replyList };

              return { ...item, replies: replyList };
            }

            return item;
          });

          resolve(foundReply);
        }
      }

      resolve(null);
    });
  }

  async delete(boardName, threadId, replyId, deletePassword) {
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
          ].threads.map((item) => {
            if (item._id === threadId) {
              const newReplyList = item.replies.filter((reply) => {
                if (reply._id === replyId) {
                  if (reply.delete_password !== deletePassword) {
                    rightPassword = false;

                    return true;
                  }
                  return false;
                }

                return true;
              });

              return { ...item, replies: newReplyList };
            }

            return item;
          });
          resolve(rightPassword);
        }
      }

      resolve(null);
    });
  }
};
