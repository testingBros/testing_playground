// const { apiRouter } = require("../index");
const { userCreation } = require("../userCreation");
const express = require('express');
const apiRouter = express.Router();

apiRouter.post("/", async (req, res) => {
  try {
  const { name, age, height } = req.query;
  const newUser = await userCreation(name, age, height);
  res.status(201).send(newUser);
  } catch(err) {
    if (err) res.status(400).send("You have entered the wrong data type");
  }
});

// apiRouter.post("/", (req, res) => {
//   const { name, age, height } = req.body;
//   const newUser = userCreation(name, age, height);
// }).then(response => {
//   res.status(201).send(response);
// }).catch(err => {
//   res.status(400).send("You have entered the wrong data type");
// });

module.exports = {
  apiRouter,
}