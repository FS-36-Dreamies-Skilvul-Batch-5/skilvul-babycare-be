const express = require("express");
const route = express.Router();

const {
  getAllNutritionRecord,
  getNutritionRecordById,
  createNutritionRecord,
  updateNutritionRecord,
  deleteNutritionRecord,
} = require("../controllers/nutrition-record-controller");

route.get("/", getAllNutritionRecord);
route.get("/:id", getNutritionRecordById);
route.post("/", createNutritionRecord);
route.put("/:id", updateNutritionRecord);
route.delete("/:id", deleteNutritionRecord);

module.exports = route;