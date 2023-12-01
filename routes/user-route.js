const express = require('express');
const route = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getAllUser,
  getUserById,
  getUserBaby,
  updateUser,
  deleteUser
} = require("../controllers/user-controller");
const verifyToken = require("../middlewares/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/users");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

route.get("/", getAllUser);
route.get("/:id", verifyToken, getUserById);
route.get("/:id/baby", verifyToken, getUserBaby);
route.put("/:id", upload.single("img_url"), verifyToken, updateUser);
route.delete("/:id", verifyToken, deleteUser);

module.exports = route;