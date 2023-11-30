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

route.get("/", getAllArticle);
route.get("/:id", getArticleById);
route.post("/", verifyToken, createArticle);
route.put("/:id", verifyToken, updateArticle);
route.delete("/:id", verifyToken, deleteArticle);

module.exports = route;
