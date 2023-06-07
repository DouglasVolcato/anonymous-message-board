const DeleteReplyService = require("../../../../data/services/reply/delete-reply-service");
const mockedDatabase = require("../../../../infra/database/mocked-database");
const BoardRepository = require("../../../../infra/repositories/board/board-repository");
const ReplyRepository = require("../../../../infra/repositories/reply/reply-repository");
const DeleteReplyController = require("../../../../presentation/controllers/reply/delete-reply-controller");

module.exports = function makeDeleteReplyControllerFactory() {
  const database = mockedDatabase;
  const boardRepository = new BoardRepository(database);
  const replyRepository = new ReplyRepository(database);
  const deleteReplyService = new DeleteReplyService(
    boardRepository,
    replyRepository
  );

  return new DeleteReplyController(deleteReplyService);
};
