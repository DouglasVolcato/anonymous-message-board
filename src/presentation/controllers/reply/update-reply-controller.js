module.exports = class UpdateReplyController {
  #updateReplyService;

  constructor(updateReplyService) {
    this.#updateReplyService = updateReplyService;
  }

  async execute(request) {
    const { thread_id, reply_id } = request.body;
    const board = request.params.board;

    const updated = await this.#updateReplyService.execute(
      board,
      thread_id,
      reply_id
    );

    if (!updated) {
      return { error: "No board with this name" };
    }

    return "success";
  }
};
