const { userCreation } = require("./userCreation");
const { userRetrieval } = require("./userRetrieval");
const { userUpdate } = require("./userUpdate");
const { userDelete } = require("./userDelete");

module.exports = {
  userRetrieval,
  userCreation,
  userUpdate,
  userDelete,
};
