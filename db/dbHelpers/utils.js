const { userCreation } = require("./userCreation"),
{ userRetrieval } = require("./userRetrieval"),
{ userUpdate } = require("./userUpdate"),
{ userDelete } = require("./userDelete");

module.exports = {
  userRetrieval,
  userCreation,
  userUpdate,
  userDelete,
};
