const { userCreation } = require("../userCreation");
const express = require('express');
const apiRouter = express.Router();

apiRouter.post("/", async (req, res) => {
  try {
    const { name, height, age} = req.body;
    const newUser = await userCreation(name, age, height);
    if (!newUser) throw "You have entered the wrong data type";
    res.status(201).send(newUser);
  } catch(err) {
      if (err) res.status(400).send("You have entered the wrong data type");
  }
});

module.exports = {
  apiRouter,
}