const express = require('express');
const route = express.Router();

const {
  getAllVaccine,
  getVaccineById,
} = require("../controllers/vaccine-controller");

route.get("/", getAllVaccine);
route.get("/:id", getVaccineById);

module.exports = route;