const express = require("express");
const route = express.Router();

const {
  getAllBaby,
  getBabyNutritionRecords,
  createBaby,
  updateBaby,
  deleteBaby
} = require("../controllers/baby-controller");

route.get("/", getAllBaby);
route.get("/:id/nutrition-records", getBabyNutritionRecords);
route.post("/", createBaby);
route.put("/:id", updateBaby);
route.delete("/:id", deleteBaby);

module.exports = route;
