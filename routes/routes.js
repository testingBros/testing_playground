// const { apiRouter } = require("../index");
const { userCreation } = require("../userCreation");
const express = require('express');
const apiRouter = express.Router();

apiRouter.post("/", async (req, res) => {
  try {
  const { name, age, height } = req.body;
  await userCreation(name, age, height);
  res.sendStatus(201);
  } catch(err) {
    if (err) res.status(400).send("You have entered the wrong data type");
  }
});

module.exports = {
  apiRouter,
}