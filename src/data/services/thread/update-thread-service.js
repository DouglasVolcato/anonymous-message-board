module.exports = class UpdateThreadService {
  #boardRepository;
  #threadRepository;

  constructor(boardRepository, threadRepository) {
    this.#boardRepository = boardRepository;
    this.#threadRepository = threadRepository;
  }

  async execute(boardName, threadId) {
    const foundBoard = await this.#boardRepository.getOne(boardName);

    if (!foundBoard) {
      return null;
    }

    return await this.#threadRepository.update(boardName, threadId);
  }
};
