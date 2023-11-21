const express = require('express');
const route = express.Router();

const {
  getAllUser,
  getUserById,
  getUserBaby,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/user-controller");
const verifyToken = require("../middlewares/auth");

route.get("/", getAllUser);
route.get("/:id", verifyToken, getUserById);
route.get("/:id/baby", verifyToken, getUserBaby);
route.post("/", createUser);
route.put("/:id", verifyToken, updateUser);
route.delete("/:id", verifyToken, deleteUser);

module.exports = route;