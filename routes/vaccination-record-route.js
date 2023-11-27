const express = require("express");
const route = express.Router();

const {
  getAllVaccinationRecord,
  getVaccinationRecordById,
  createVaccinationRecord,
  updateVaccinationRecord,
  deleteVaccinationRecord,
} = require("../controllers/vaccination-record-controller");
const verifyToken = require("../middlewares/auth");

route.get("/", verifyToken, getAllVaccinationRecord);
route.get("/:id", verifyToken, getVaccinationRecordById);
route.post("/", verifyToken, createVaccinationRecord);
route.put("/:id", verifyToken, updateVaccinationRecord);
route.delete("/:id", verifyToken, deleteVaccinationRecord);

module.exports = route;