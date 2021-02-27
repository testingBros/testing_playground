const express = require("express");
const { apiRouter } = require("./routes/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = {
  apiRouter,
  app,
};
