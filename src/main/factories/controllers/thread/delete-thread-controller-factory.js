const DeleteThreadService = require("../../../../data/services/thread/delete-thread-service");
const mockedDatabase = require("../../../../infra/database/mocked-database");
const BoardRepository = require("../../../../infra/repositories/board/board-repository");
const ThreadRepository = require("../../../../infra/repositories/thread/thread-repository");
const DeleteThreadController = require("../../../../presentation/controllers/thread/delete-thread-controller");

module.exports = function makeDeleteThreadControllerFactory() {
  const database = mockedDatabase;
  const boardRepossitory = new BoardRepository(database);
  const threadRepository = new ThreadRepository(database);
  const deleteThreadService = new DeleteThreadService(
    boardRepossitory,
    threadRepository
  );

  return new DeleteThreadController(deleteThreadService);
};
