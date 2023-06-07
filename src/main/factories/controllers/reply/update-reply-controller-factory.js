const UpdateReplyService = require("../../../../data/services/reply/update-reply-service");
const mockedDatabase = require("../../../../infra/database/mocked-database");
const BoardRepository = require("../../../../infra/repositories/board/board-repository");
const ReplyRepository = require("../../../../infra/repositories/reply/reply-repository");
const UpdateReplyController = require("../../../../presentation/controllers/reply/update-reply-controller");

module.exports = function makeUpdateReplyControllerFactory() {
  const database = mockedDatabase;
  const replyRepository = new ReplyRepository(database);
  const boardRepository = new BoardRepository(database);
  const updateReplyService = new UpdateReplyService(
    replyRepository,
    boardRepository
  );

  return new UpdateReplyController(updateReplyService);
};
