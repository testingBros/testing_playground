const {
    userCreation,
    userRetrieval,
    userUpdate,
  } = require("../db/dbHelpers/utils"),
  express = require("express"),
  apiRouter = express.Router();

apiRouter.post("/", async (req, res) => {
  try {
    const { username, height, age } = req.body;
    const newUser = await userCreation(username, age, height);
    if (!newUser) throw "You have entered the wrong data type";
    res.status(201).send(newUser);
  } catch (err) {
    if (err) res.status(400).send(err);
  }
});

apiRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userRetrieval(id);
    if (!user) throw "This user does not exist.";
    res.send(user);
  } catch (err) {
    if (err) res.status(404).send(err);
  }
});

apiRouter.patch("/:id", async (req, res) => {
  const { body: userPropertyValuesToUpdate } = req;
  const {
    params: { id },
  } = req;
  try {
    const updatedUser = await userUpdate(id, userPropertyValuesToUpdate);
    if (!updatedUser) throw "This user does not exist.";
    res.send(updatedUser);
  } catch (err) {
    if (err) res.status(404).send(err);
  }
});

module.exports = {
  apiRouter,
};
