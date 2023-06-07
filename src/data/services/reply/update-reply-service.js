module.exports = class UpdateReplyService {
  #replyRepository;
  #boardRepository;

  constructor(replyRepository, boardRepository) {
    this.#replyRepository = replyRepository;
    this.#boardRepository = boardRepository;
  }

  async execute(boardName, threadId, replyId) {
    const foundBoard = await this.#boardRepository.getOne(boardName);

    if (!foundBoard) {
      return null;
    }

    return await this.#replyRepository.update(boardName, threadId, replyId);
  }
};
