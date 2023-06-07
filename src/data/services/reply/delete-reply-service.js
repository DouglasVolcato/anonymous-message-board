module.exports = class DeleteReplyService {
  #boardRepository;
  #replyRepository;

  constructor(boardRepository, replyRepository) {
    this.#boardRepository = boardRepository;
    this.#replyRepository = replyRepository;
  }

  async execute(boardName, threadId, replyId, deletePassword) {
    const foundBoard = await this.#boardRepository.getOne(boardName);

    if (!foundBoard) {
      return null;
    }

    const deleted = await this.#replyRepository.delete(
      boardName,
      threadId,
      replyId,
      deletePassword
    );

    if (!deleted) {
      return "Incorrect Password";
    }

    return "success";
  }
};
