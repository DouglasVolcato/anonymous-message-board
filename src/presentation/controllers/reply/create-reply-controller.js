module.exports = class CreateReplyController {
  #createReplyService;

  constructor(createReplyService) {
    this.#createReplyService = createReplyService;
  }

  async execute(request) {
    const { thread_id, text, delete_password } = request.body;
    const board = request.params.board;

    const createdThred = await this.#createReplyService.execute(
      board,
      thread_id,
      text,
      delete_password
    );

    return createdThred;
  }
};
