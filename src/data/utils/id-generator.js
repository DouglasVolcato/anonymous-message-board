const { v4 } = require("uuid");

module.exports = class IdGenerator {
  generateId() {
    return v4();
  }
};
