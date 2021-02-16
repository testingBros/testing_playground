const {
    userCreation,
    userRetrieval,
    userUpdate,
    userDelete,
  } = require("../db/dbHelpers/utils"),
  { errorHandlerBuilder, errorMessageBuilder } = require("./utils"),
  express = require("express"),
  apiRouter = express.Router();

apiRouter.post("/", async (req, res) => {
  try {
    const { username, height, age } = req.body;
    const newUser = await userCreation(username, age, height);
    errorMessageBuilder("You have entered the wrong data type", newUser);
    res.status(201).send(newUser);
  } catch (err) {
    errorHandlerBuilder(400, err, res);
  }
});

apiRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userRetrieval(id);
    errorMessageBuilder("This user does not exist.", user);
    res.send(user);
  } catch (err) {
    errorHandlerBuilder(404, err, res);
  }
});

apiRouter.patch("/:id", async (req, res) => {
  const { body: userPropertyValuesToUpdate } = req;
  const {
    params: { id },
  } = req;
  try {
    const updatedUser = await userUpdate(id, userPropertyValuesToUpdate);
    errorMessageBuilder("This user does not exist.", updatedUser);
    res.send(updatedUser);
  } catch (err) {
    errorHandlerBuilder(404, err, res);
  }
});

apiRouter.delete("/:id", async (req, res) => {
  const { params: { id }} = req;
  try {
    const deletedUserResponse = await userDelete(id);
    errorMessageBuilder("This user does not exist.", deletedUserResponse);
    res.sendStatus(204);    
  } catch (err) {
    errorHandlerBuilder(404, err, res);
  }
});

module.exports = {
  apiRouter,
};
