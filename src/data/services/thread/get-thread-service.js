module.exports = class GetThreadService {
  #boardRepository;

  constructor(boardRepository) {
    this.#boardRepository = boardRepository;
  }

  async execute(boardName) {
    const foundBoard = await this.#boardRepository.getOne(boardName);

    if (!foundBoard) {
      return null;
    }

    return foundBoard.threads.map((thread) => ({
      ...thread,
      replycount: thread.replies.length,
    }));
  }
};
