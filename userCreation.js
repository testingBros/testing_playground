const db = require("./sample_user_data.json");
const userCreation = (name, age, height) => {
  if (userPropertyValidation(name, age, height) === false) {
    return "please include name, age, height.";
  }

  return { name, age, height };
};

const userPropertyValidation = (name, age, height) => {
  if (!name && !age && !height) {
    return false;
  }
};

Object.assign(module.exports, {
  userCreation,
});
