const express = require("express");
const route = express.Router();

const {
  getAllNutritionRecord,
  getNutritionRecordById,
  createNutritionRecord,
  updateNutritionRecord,
  deleteNutritionRecord,
} = require("../controllers/nutrition-record-controller");
const verifyToken = require("../middlewares/auth");

route.get("/", verifyToken, getAllNutritionRecord);
route.get("/:id", verifyToken, getNutritionRecordById);
route.post("/", verifyToken, createNutritionRecord);
route.put("/:id", verifyToken, updateNutritionRecord);
route.delete("/:id", verifyToken, deleteNutritionRecord);

module.exports = route;