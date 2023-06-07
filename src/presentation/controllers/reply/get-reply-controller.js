module.exports = class GetReplyController {
  #getReplyService;

  constructor(getReplyService) {
    this.#getReplyService = getReplyService;
  }

  async execute(request) {
    const { thread_id } = request.query;
    const board = request.params.board;

    const foundThread = await this.#getReplyService.execute(board, thread_id);

    if (!foundThread) {
      return { error: "No board with this name" };
    }

    return foundThread;
  }
};
