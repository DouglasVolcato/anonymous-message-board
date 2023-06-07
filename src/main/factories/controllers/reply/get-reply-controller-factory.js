const GetReplyService = require("../../../../data/services/reply/get-reply-service");
const mockedDatabase = require("../../../../infra/database/mocked-database");
const BoardRepository = require("../../../../infra/repositories/board/board-repository");
const ThreadRepository = require("../../../../infra/repositories/thread/thread-repository");
const GetReplyController = require("../../../../presentation/controllers/reply/get-reply-controller");

module.exports = function makeGetReplyControllerFactory() {
  const database = mockedDatabase;
  const threadRepository = new ThreadRepository(database);
  const boardRepository = new BoardRepository(database);
  const getReplyService = new GetReplyService(
    threadRepository,
    boardRepository
  );

  return new GetReplyController(getReplyService);
};
