const GetThreadService = require("../../../../data/services/thread/get-thread-service");
const GetThreadController = require("../../../../presentation/controllers/thread/get-thread-controller");
const mockedDatabase = require("../../../../infra/database/mocked-database");
const BoardRepository = require("../../../../infra/repositories/board/board-repository");

module.exports = function makeGetThreadControllerFactory() {
  const database = mockedDatabase;
  const boardRepository = new BoardRepository(database);
  const getThreadService = new GetThreadService(boardRepository);

  return new GetThreadController(getThreadService);
};
