"use strict";

const express = require("express");
const authRouter = express.Router();

const { users } = require("../models");
const basicAuth = require("../middleware/basic.js");
const bearerAuth = require("../middleware/bearer.js");
const permissions = require("../middleware/acl.js");

const path = require("path");

authRouter.post("/signup", async (req, res, next) => {
  try {
    let userRecord = await users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token,
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message);
  }
});

authRouter.get("/signup", async (req, res, next) => {
  try {
    let userRecord = await users.findAll();

    res.status(201).json(userRecord);
  } catch (e) {
    next(e.message);
  }
});

authRouter.put("/signup/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const obj = req.body;
    let userRecord = await users
      .findOne({ where: { id } })
      .then((record) => record.update(obj));

    res.status(201).json(userRecord);
  } catch (e) {
    next(e.message);
  }
});

authRouter.post("/signin", basicAuth, (req, res, next) => {
  const user = {
    user: req.user,
    token: req.user.token,
  };
  res.status(200).json(user);
});

authRouter.get(
  "/users",
  bearerAuth,
  permissions("delete"),
  async (req, res, next) => {
    const userRecords = await users.findAll({});
    const list = userRecords.map((user) => user.username);
    res.status(200).json(list);
  }
);

module.exports = authRouter;
