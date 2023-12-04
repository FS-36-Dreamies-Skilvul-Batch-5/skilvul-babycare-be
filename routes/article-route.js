const express = require("express");
const route = express.Router();

const {
  getAllArticle,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/article-controller");
const verifyToken = require("../middlewares/auth");
const upload = require("../middlewares/fileUpload");

route.get("/", getAllArticle);
route.get("/:id", getArticleById);
route.post("/", verifyToken, upload.single("img_url"), createArticle);
route.put("/:id", verifyToken, upload.single("img_url"), updateArticle);
route.delete("/:id", verifyToken, deleteArticle);

module.exports = route;
