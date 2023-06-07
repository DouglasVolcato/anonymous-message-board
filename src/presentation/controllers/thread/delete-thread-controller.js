module.exports = class DeleteThreadController {
  #deleteThreadService;

  constructor(deleteThreadService) {
    this.#deleteThreadService = deleteThreadService;
  }

  async execute(request) {
    const { thread_id, delete_password } = request.body;
    const board = request.params.board;

    const deleted = this.#deleteThreadService.execute(
      board,
      thread_id,
      delete_password
    );

    if (!deleted) {
      return { error: "Board not found" };
    }

    return deleted;
  }
};
