const CreateReplyService = require("../../../../data/services/reply/create-reply-service");
const DateGenerator = require("../../../../data/utils/date-generator");
const IdGenerator = require("../../../../data/utils/id-generator");
const BoardRepository = require("../../../../infra/repositories/board/board-repository");
const ReplyRepository = require("../../../../infra/repositories/reply/reply-repository");
const CreateReplyController = require("../../../../presentation/controllers/reply/create-reply-controller");

module.exports = function makeCreateReplyControllerFactory() {
  const database = mockedDatabase;
  const boardRepository = new BoardRepository(database);
  const replyRepository = new ReplyRepository(database);
  const idGenerator = new IdGenerator();
  const dateGenerator = new DateGenerator();

  const createReplyService = new CreateReplyService(
    boardRepository,
    replyRepository,
    idGenerator,
    dateGenerator
  );

  return new CreateReplyController(createReplyService);
};
