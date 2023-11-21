const express = require("express");
const route = express.Router();

const {
  getAllArticleCategory,
  createArticleCategory,
  updateArticleCategory,
  deleteArticleCategory,
} = require("../controllers/article-category-controller");

route.get("/", getAllArticleCategory);
route.post("/", createArticleCategory);
route.put("/:id", updateArticleCategory);
route.delete("/:id", deleteArticleCategory);

module.exports = route;
