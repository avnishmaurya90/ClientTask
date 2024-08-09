const express = require("express");
const router = express.Router();
const menuService = require("./menu.service");

router.get("/", getAll);
module.exports = router;

async function getAll(req, res, next) {
  await menuService
    .getAll()
    .then((data) => res.status(data.status).json(data))
    .catch(next);
}