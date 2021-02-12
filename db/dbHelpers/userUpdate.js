const { db } = require("../index");

const queryBuilder = (userPropertyValuesToUpdate) =>
  Object.entries(userPropertyValuesToUpdate).reduce(
    (qs, curr) => (qs += `${curr[0]} = '${curr[1]}', `),
    ""
  );

const userUpdate = async (id, userPropertyValuesToUpdate) => {
  const userId = +id;
  const user = await db.query(
    `UPDATE users SET ${queryBuilder(userPropertyValuesToUpdate).slice(
      0,
      -2
    )} WHERE id = ${userId} returning *`
  );
  return user.rows[0];
};

module.exports = {
  userUpdate,
};
