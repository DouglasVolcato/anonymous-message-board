module.exports = class CreateThreadController {
  #createThreadService;

  constructor(createThreadService) {
    this.#createThreadService = createThreadService;
  }

  async execute(request) {
    const { text, delete_password } = request.body;
    let board = request.body.board;

    if (!board) {
      board = request.params.board;
    }

    const createdThred = await this.#createThreadService.execute(
      board,
      text,
      delete_password
    );

    return createdThred;
  }
};
