const CreateThreadService = require("../../../../data/services/thread/create-thread-service");
const ThreadRepository = require("../../../../infra/repositories/thread/thread-repository");
const CreateThreadController = require("../../../../presentation/controllers/thread/create-thread-controller");
const mockedDatabase = require("../../../../infra/database/mocked-database");
const IdGenerator = require("../../../../data/utils/id-generator");
const DateGenerator = require("../../../../data/utils/date-generator");
const BoardRepository = require("../../../../infra/repositories/board/board-repository");

module.exports = function makeCreateThreadControllerFactory() {
  const database = mockedDatabase;
  const boardRepository = new BoardRepository(database);
  const threadRepository = new ThreadRepository(database);
  const idGenerator = new IdGenerator();
  const dateGenerator = new DateGenerator();
  const createThreadService = new CreateThreadService(
    boardRepository,
    threadRepository,
    idGenerator,
    dateGenerator
  );

  return new CreateThreadController(createThreadService);
};
