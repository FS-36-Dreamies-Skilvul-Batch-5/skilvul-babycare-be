const express = require('express');
const route = express.Router();

const {
  getAllUser,
  getUserById,
  getUserBaby,
  updateUser,
  deleteUser
} = require("../controllers/user-controller");
const verifyToken = require("../middlewares/auth");
const upload = require("../middlewares/fileUpload");

route.get("/", getAllUser);
route.get("/:id", verifyToken, getUserById);
route.get("/:id/baby", verifyToken, getUserBaby);
route.put("/:id", upload.single("img_url"), verifyToken, updateUser);
route.delete("/:id", verifyToken, deleteUser);

module.exports = route;