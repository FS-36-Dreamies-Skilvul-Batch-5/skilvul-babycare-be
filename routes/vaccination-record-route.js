const express = require("express");
const route = express.Router();

const {
  getAllVaccinationRecord,
  getVaccinationRecordById,
  createVaccinationRecord,
  updateVaccinationRecord,
  deleteVaccinationRecord,
} = require("../controllers/vaccination-record-controller");

route.get("/", getAllVaccinationRecord);
route.get("/:id", getVaccinationRecordById);
route.post("/", createVaccinationRecord);
route.put("/:id", updateVaccinationRecord);
route.delete("/:id", deleteVaccinationRecord);

module.exports = route;