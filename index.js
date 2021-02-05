const express = require("express");
// const apiRouter = express.Router();
const { apiRouter } = require("./routes/routes");
require('./db/index')

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


module.exports = {
  apiRouter,
  app
}
