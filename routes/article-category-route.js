const express = require("express");
const route = express.Router();

const {
  getAllArticleCategory,
  createArticleCategory,
  updateArticleCategory,
  deleteArticleCategory,
} = require("../controllers/article-category-controller");
const verifyToken = require("../middlewares/auth");

route.get("/", getAllArticleCategory);
route.post("/", verifyToken, createArticleCategory);
route.put("/:id", verifyToken, updateArticleCategory);
route.delete("/:id", verifyToken, deleteArticleCategory);

module.exports = route;
