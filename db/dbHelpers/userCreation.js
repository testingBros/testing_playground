const { db } = require("../index");
const userCreation = (username, age, height) =>
  userPropertyValidation(username, age, height) === false
    ? false
    : dbInsertQuery({ username, age, height });

const userPropertyValidation = (username, age, height) => {
  if (!username || !age || !height) {
    return false;
  }
  if (typeof username !== "string") return false;
  if (typeof height !== "string") return false;
};

const dbInsertQuery = async ({ age, height, username }) => {
  const {
    rows: [{ id }],
  } = await db.query(
    `INSERT INTO users (age, height, username) VALUES ('${age}','${height}', '${username}') RETURNING id`
  );
  return { id, age, height, username };
};

module.exports = {
  userCreation,
};
