const UpdateThreadService = require("../../../../data/services/thread/update-thread-service");
const mockedDatabase = require("../../../../infra/database/mocked-database");
const BoardRepository = require("../../../../infra/repositories/board/board-repository");
const ThreadRepository = require("../../../../infra/repositories/thread/thread-repository");
const UpdateThreadController = require("../../../../presentation/controllers/thread/update-thread-controller");

module.exports = function makeUpdateThreadControllerFactory() {
  const database = mockedDatabase;
  const boardRepossitory = new BoardRepository(database);
  const threadRepository = new ThreadRepository(database);
  const updateThreadService = new UpdateThreadService(
    boardRepossitory,
    threadRepository
  );

  return new UpdateThreadController(updateThreadService);
};
