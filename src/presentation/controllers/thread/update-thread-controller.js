module.exports = class UpdateThreadController {
  #updateThreadService;

  constructor(updateThreadService) {
    this.#updateThreadService = updateThreadService;
  }

  async execute(request) {
    const { report_id } = request.body;
    const board = request.params.board;

    const updated = this.#updateThreadService.execute(board, report_id);

    if (!updated) {
      return { error: "Board not found" };
    }

    return "success";
  }
};
