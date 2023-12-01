const express = require("express");
const route = express.Router();

const {
  getAllBaby,
  getBabyNutritionRecords,
  getBabyVaccinationRecords,
  createBaby,
  updateBaby,
  deleteBaby
} = require("../controllers/baby-controller");
const verifyToken = require("../middlewares/auth");

route.get("/", verifyToken, getAllBaby);
route.get("/:id/nutrition-records", verifyToken, getBabyNutritionRecords);
route.get("/:id/vaccination-records", verifyToken, getBabyVaccinationRecords);
route.post("/", verifyToken, createBaby);
route.put("/:id", verifyToken, updateBaby);
route.delete("/:id", verifyToken, deleteBaby);

module.exports = route;
