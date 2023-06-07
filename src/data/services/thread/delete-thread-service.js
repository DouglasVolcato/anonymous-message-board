module.exports = class DeleteThreadService {
  #boardRepository;
  #threadRepository;

  constructor(boardRepository, threadRepository) {
    this.#boardRepository = boardRepository;
    this.#threadRepository = threadRepository;
  }

  async execute(boardName, threadId, deletePassword) {
    const foundBoard = await this.#boardRepository.getOne(boardName);

    if (!foundBoard) {
      return null;
    }

    const deleted = await this.#threadRepository.delete(
      boardName,
      threadId,
      deletePassword
    );

    if (!deleted) {
      return "Incorrect Password";
    }

    return "success";
  }
};
