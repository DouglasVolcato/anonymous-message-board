const chaiHttp = require("chai-http");
const chai = require("chai");
const assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  suite("API ROUTING FOR /api/threads/:board", function () {
    suite("POST", function () {
      test("create thread", function (done) {
        chai
          .request(server)
          .post("/api/threads/testsuite")
          .send({ text: "Test Suite Thread Title", delete_password: "123" })
          .end((err, res) => {
            assert.equal(res.status, 200);
            done();
          });
      });
    });

    suite("GET", function () {
      test("get top 10 threads", function (done) {
        chai
          .request(server)
          .get("/api/threads/testsuite")
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.isArray(res.body);
            assert.isAtMost(res.body.length, 10);
            assert.property(res.body[0], "_id");
            assert.property(res.body[0], "text");
            assert.property(res.body[0], "created_on");
            assert.property(res.body[0], "bumped_on");
            assert.property(res.body[0], "replies");
            assert.isArray(res.body[0].replies);
            done();
          });
      });
    });

    suite("DELETE", function () {
      test("delete with missing fields", function (done) {
        chai
          .request(server)
          .delete("/api/threads/testsuite")
          .send({ board: "testsuite", delete_password: "123" })
          .end((err, res) => {
            assert.equal(res.status, 200);
            done();
          });
      });

      test("delete thread with valid info", function (done) {
        chai
          .request(server)
          .delete("/api/threads/testsuite")
          .send({
            board: "testsuite",
            thread_id: "5b5222c4e075982292e6e660",
            delete_password: "123",
          })
          .end((err, res) => {
            assert.equal(res.status, 200);
            done();
          });
      });
    });

    suite("PUT", function () {
      test("no id sent", function (done) {
        chai
          .request(server)
          .put("/api/threads/testsuite")
          .send({ board: "testsuite" })
          .end((err, res) => {
            assert.equal(res.status, 200);
            done();
          });
      });

      test("correct id sent", function (done) {
        chai
          .request(server)
          .put("/api/threads/testsuite")
          .send({ board: "testsuite", thread_id: "5b5222c4e075982292e6e660" })
          .end((err, res) => {
            assert.equal(res.status, 200);
            done();
          });
      });
    });
  });

  suite("API ROUTING FOR /api/replies/:board", function () {
    suite("POST", function () {
      test("create thread", function (done) {
        chai
          .request(server)
          .post("/api/replies/testsuite")
          .send({
            text: "Test Suite Thread Title",
            thread_id: "5b5222ff819d11237030c9a7",
            delete_password: "123",
          })
          .end((err, res) => {
            assert.equal(res.status, 200);
            done();
          });
      });
    });

    suite("GET", function () {
      test("get all replies to a thread", function (done) {
        chai
          .request(server)
          .get("/api/replies/testsuite?thread_id=5b5222ff819d11237030c9a7")
          .end((err, res) => {
            assert.equal(res.status, 200);
            done();
          });
      });
    });

    suite("PUT", function () {
      test("missing reply id", function (done) {
        chai
          .request(server)
          .put("/api/replies/testsuite")
          .send({ board: "testsuite", thread_id: "5b5222ff819d11237030c9a7" })
          .end((err, res) => {
            assert.equal(res.status, 200);
            done();
          });
      });

      test("correct id sent", function (done) {
        chai
          .request(server)
          .put("/api/replies/testsuite")
          .send({
            board: "testsuite",
            thread_id: "5b5222ff819d11237030c9a7",
            reply_id: "1532113231148",
          })
          .end((err, res) => {
            assert.equal(res.status, 200);
            done();
          });
      });
    });

    suite("DELETE", function () {
      test("delete with missing fields", function (done) {
        chai
          .request(server)
          .delete("/api/replies/testsuite")
          .send({ board: "testsuite", delete_password: "123" })
          .end((err, res) => {
            assert.equal(res.status, 200);
            done();
          });
      });

      test("delete thread with valid info", function (done) {
        chai
          .request(server)
          .delete("/api/replies/testsuite")
          .send({
            board: "testsuite",
            thread_id: "5b5222ff819d11237030c9a7",
            reply_id: "1532113231148",
            delete_password: "123",
          })
          .end((err, res) => {
            assert.equal(res.status, 200);
            done();
          });
      });
    });
  });
});
