const { db } = require("../index");

const userRetrieval = async (currentUserId) => {
  const {
    rows: [user],
  } = await db.query(`SELECT * FROM users WHERE id = ${currentUserId}`);
  return user;
};

module.exports = {
  userRetrieval,
};
