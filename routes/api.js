"use strict";

const makeCreateThreadControllerFactory = require("../src/main/factories/controllers/thread/create-thread-controller-factory");
const makeGetThreadControllerFactory = require("../src/main/factories/controllers/thread/get-thread-controller-factory");
const makeUpdateThreadControllerFactory = require("../src/main/factories/controllers/thread/update-thread-controller-factory");
const makeDeleteThreadControllerFactory = require("../src/main/factories/controllers/thread/delete-thread-controller-factory");
const makeCreateReplyControllerFactory = require("../src/main/factories/controllers/reply/create-reply-controller-factory");
const makeGetReplyControllerFactory = require("../src/main/factories/controllers/reply/get-reply-controller-factory");
const makeUpdateReplyControllerFactory = require("../src/main/factories/controllers/reply/update-reply-controller-factory");
const makeDeleteReplyControllerFactory = require("../src/main/factories/controllers/reply/delete-reply-controller-factory");

module.exports = function (app) {
  app
    .route("/api/threads/:board")
    .post(async (req, res) => {
      const createThreadController = makeCreateThreadControllerFactory();
      const response = await createThreadController.execute(req);

      if (response === "success") {
        res.send(response);
        return;
      }

      res.json(response);
    })
    .get(async (req, res) => {
      const getThreadController = makeGetThreadControllerFactory();
      const response = await getThreadController.execute(req);

      if (response === "success") {
        res.send(response);
        return;
      }

      res.json(response);
    })
    .put(async (req, res) => {
      const updateThreadController = makeUpdateThreadControllerFactory();
      const response = await updateThreadController.execute(req);

      if (response === "success") {
        res.send(response);
        return;
      }

      res.json(response);
    })
    .delete(async (req, res) => {
      const deleteThreadController = makeDeleteThreadControllerFactory();
      const response = await deleteThreadController.execute(req);

      if (response === "success") {
        res.send(response);
        return;
      }

      res.json(response);
    });

  app
    .route("/api/replies/:board")
    .post(async (req, res) => {
      const createReplyController = makeCreateReplyControllerFactory();
      const response = await createReplyController.execute(req);

      if (response === "success") {
        res.send(response);
        return;
      }

      res.json(response);
    })
    .get(async (req, res) => {
      const getReplyController = makeGetReplyControllerFactory();
      const response = await getReplyController.execute(req);

      if (response === "success") {
        res.send(response);
        return;
      }

      res.json(response);
    })
    .put(async (req, res) => {
      const updateReplyController = makeUpdateReplyControllerFactory();
      const response = await updateReplyController.execute(req);

      if (response === "success") {
        res.send(response);
        return;
      }

      res.json(response);
    })
    .delete(async (req, res) => {
      const deleteReplyController = makeDeleteReplyControllerFactory();
      const response = await deleteReplyController.execute(req);

      if (response === "success") {
        res.send(response);
        return;
      }

      res.json(response);
    });
};
