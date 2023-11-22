const express = require("express");
const route = express.Router();

const {
  getAllBaby,
  createBaby,
  updateBaby,
  deleteBaby
} = require("../controllers/baby-controller");

route.get("/", getAllBaby);
route.post("/", createBaby);
route.put("/:id", updateBaby);
route.delete("/:id", deleteBaby);

module.exports = route;
