const { db } = require('./db/index');
const userCreation = (name, age, height) => {
  if (userPropertyValidation(name, age, height) === false) {
    return "please include name, age, height.";
  }

  return dbInsertQuery({ name, age, height });
};

const userPropertyValidation = (name, age, height) => {
  if (!name && !age && !height) {
    return false;
  }
};

const dbInsertQuery = ({ age, height, name}) => {
 return db.query(`INSERT INTO users (age, height, username) VALUES ('${age}','${height}', '${name}')`);
};

Object.assign(module.exports, {
  userCreation,
});
