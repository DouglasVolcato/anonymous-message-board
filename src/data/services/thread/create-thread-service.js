module.exports = class CreateThreadService {
  #boardRepository;
  #threadRepository;
  #idGenerator;
  #dateGenerator;

  constructor(boardRepository, threadRepository, idGenerator, dateGenerator) {
    this.#boardRepository = boardRepository;
    this.#threadRepository = threadRepository;
    this.#idGenerator = idGenerator;
    this.#dateGenerator = dateGenerator;
  }

  async execute(boardName, text, deletePassword) {
    const foundBoard = await this.#boardRepository.getOne(boardName);

    if (!foundBoard) {
      const newBoard = {
        _id: this.#idGenerator.generateId(),
        name: boardName,
        threads: [],
      };

      await this.#boardRepository.create(newBoard);
    }

    const newThread = {
      _id: this.#idGenerator.generateId(),
      text: text,
      delete_password: deletePassword,
      reported: false,
      created_on: this.#dateGenerator.now(),
      bumped_on: this.#dateGenerator.now(),
      replies: [],
    };

    const createdThread = await this.#threadRepository.create(
      boardName,
      newThread
    );

    return createdThread;
  }
};
