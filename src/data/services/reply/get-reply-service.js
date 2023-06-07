module.exports = class GetReplyService {
  #threadRepository;
  #boardRepository;

  constructor(threadRepository, boardRepository) {
    this.#threadRepository = threadRepository;
    this.#boardRepository = boardRepository;
  }

  async execute(boardName, threadId) {
    const foundBoard = await this.#boardRepository.getOne(boardName);

    if (!foundBoard) {
      return null;
    }

    const foundThread = await this.#threadRepository.getOne(
      boardName,
      threadId
    );

    if (!foundThread) {
      return null;
    }

    return foundThread;
  }
};
