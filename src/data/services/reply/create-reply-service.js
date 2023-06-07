module.exports = class CreateReplyService {
  #boardRepository;
  #replyRepository;
  #idGenerator;
  #dateGenerator;

  constructor(boardRepository, replyRepository, idGenerator, dateGenerator) {
    this.#boardRepository = boardRepository;
    this.#replyRepository = replyRepository;
    this.#idGenerator = idGenerator;
    this.#dateGenerator = dateGenerator;
  }

  async execute(boardName, threadId, text, deletePassword) {
    const foundBoard = await this.#boardRepository.getOne(boardName);

    if (!foundBoard) {
      return null;
    }

    const newReply = {
      _id: this.#idGenerator.generateId(),
      text: text,
      delete_password: deletePassword,
      reported: false,
      created_on: this.#dateGenerator.now(),
      bumped_on: this.#dateGenerator.now(),
    };

    await this.#replyRepository.create(boardName, threadId, newReply);

    return newReply;
  }
};
