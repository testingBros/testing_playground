const { userCreation } = require("../userCreation");
const express = require('express');
const apiRouter = express.Router();

apiRouter.post("/", async (req, res) => {
  try {
  const { name, height } = req.query;
  const age = +req.query.age;
  const newUser = await userCreation(name, age, height);
  res.status(201).send(newUser);
  } catch(err) {
    if (err) res.status(400).send("You have entered the wrong data type");
  }
});

module.exports = {
  apiRouter,
}