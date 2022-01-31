"use strict";

const express = require("express");
const app = express();

const PORT = process.env.PORT;
const authRouter = require("./routes/auth.routes");
const v1Router = require("./routes/v1.route");

const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", v1Router);
app.use(authRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to server home! 🏡 ");
});

app.use("*", notFoundHandler);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

module.exports = {
  start,
  app,
};
