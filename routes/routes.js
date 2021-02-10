const { userCreation, userRetrieval } = require("../db/dbHelpers/utils");
const express = require('express');
const apiRouter = express.Router();

apiRouter.post("/", async (req, res) => {
  try {
    const { name, height, age} = req.body;
    const newUser = await userCreation(name, age, height);
    if (!newUser) throw "You have entered the wrong data type";
    res.status(201).send(newUser);
  } catch(err) {
      if (err) res.status(400).send(err);
  }
});

apiRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userRetrieval(id);
    if (!user) throw "user does not exist";
    res.send(user);
  } catch(err) {
    if (err) res.status(400).send(err);
  }
});

module.exports = {
  apiRouter,
}