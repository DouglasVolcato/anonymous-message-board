module.exports = class DeleteReplyController {
  #deleteReplyService;

  constructor(deleteReplyService) {
    this.#deleteReplyService = deleteReplyService;
  }

  async execute(request) {
    const { thread_id, reply_id, delete_password } = request.body;
    const board = request.params.board;

    const deleted = await this.#deleteReplyService.execute(
      board,
      thread_id,
      reply_id,
      delete_password
    );

    if (!deleted) {
      return { error: "No board with this name" };
    }

    return deleted;
  }
};
