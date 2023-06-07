module.exports = class GetThreadController {
  #getThreadService;

  constructor(getThreadService) {
    this.#getThreadService = getThreadService;
  }

  async execute(request) {
    const board = request.params.board;

    const threads = this.#getThreadService.execute(board);

    if (!threads) {
      return { error: "No board with this name" };
    }

    return threads;
  }
};
