const express = require("express");
const route = express.Router();

const {
  getAllArticle,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/article-controller");

route.get("/", getAllArticle);
route.get("/:id", getArticleById);
route.post("/", createArticle);
route.put("/:id", updateArticle);
route.delete("/:id", deleteArticle);

module.exports = route;
