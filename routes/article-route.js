const express = require("express");
const route = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getAllArticle,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/article-controller");
const verifyToken = require("../middlewares/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/articles");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

route.get("/", getAllArticle);
route.get("/:id", getArticleById);
route.post("/", upload.single("img_url"), verifyToken, createArticle);
route.put("/:id", upload.single("img_url"), verifyToken, updateArticle);
route.delete("/:id", verifyToken, deleteArticle);

module.exports = route;
