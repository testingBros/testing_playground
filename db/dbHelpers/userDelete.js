const { db } = require("../index");

const userDelete = async (id) => {
  const { rowCount: doesUserExist } = await db.query(`DELETE FROM users WHERE id = '${id}'`);
  return doesUserExist ? true : false;
}

module.exports = {
  userDelete,
}